import React, { useState, useEffect, useRef } from 'react';
import Table from './Table';
import './App.css';
import FoodForm from './FoodForm';

const PRICE = [100, 200, 400, 890, 2000, 4000, 5000];

const App = () => {

  const [listState, setListState] = useState([]);
  const [counterState, setCounterState] = useState(1);
  const [formState, setFormState] = useState({
    formElements:
    {
      foodName: '',
      foodCost: PRICE[0]
    }
  });
  useEffect(() => {
    document.querySelector("#foodName").value = formState.formElements.foodName;
  }, [formState.formElements.foodName]);

  const listStateRef = useRef(listState);
  useEffect(() => {
    listStateRef.current = listState
  }, [listState]);
  

  const onFormChange = (e) => {

    const name = e.target.id;
    const value = e.target.value;

    const updatedForm = { ...formState.formElements };
    updatedForm[name] = value;

    setFormState(
      {
        formElements: updatedForm
      }
    );
  }

  const onFormSubmit = (e) => {

    e.preventDefault();

    //add row to list state
    setListState(listState => [...listState, 
      {
        counter: counterState,
        foodName: formState.formElements.foodName,
        foodCost: formState.formElements.foodCost,
        editFoodName: formState.formElements.foodName,
        editFoodCost: formState.formElements.foodCost,
        editRow: editItemHandler.bind(this, counterState),    //bind with this & counter. (Partially applied functions) will call it with an additional param
        deleteRow: deleteItemHandler.bind(this, counterState)   //bind with this & counter. (Partially applied functions)
      }
    ]);

    //increase counter
    setCounterState(counterState => counterState + 1);

    //clear form
    setFormState(
      {
        formElements:
        {
          foodName: '',
          foodCost: PRICE[0]
        }
      }
    );
  }

  const editItemHandler = (id, data) => {

    const table = [...listStateRef.current];

    const row = table.filter((item) => item.counter === id);

    row[0].foodName = data.editFoodName;
    row[0].foodCost = data.editFoodCost;

    const editIndex = table.findIndex((item) => item.counter === id);

    table.splice(editIndex, 1, row[0]);

    setListState(table);
  }

  const deleteItemHandler = (id) => {

    const deletedList = listStateRef.current.filter((item) => item.counter !== id);

    setListState(deletedList);
  }

  return (
    <>
      <div className="main container-fluid">
        <div className="table-responsive">
          <Table data={listState} PRICE={PRICE} />
        </div>
        <div className="mx-auto text-center w-25">
          <FoodForm formElements={formState.formElements}
            formSubmit={onFormSubmit} formChange={onFormChange} PRICE={PRICE} />
        </div>
      </div>
    </>
  );
}

export default App;