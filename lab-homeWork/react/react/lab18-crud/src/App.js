import React from 'react';
import Table from './Table';
import './App.css';
import FoodForm from './FoodForm';

const PRICE = [100, 200, 400, 890, 2000, 4000, 5000];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      counter: 0,
      formElements:
      {
        foodName: '',
        foodCost: PRICE[0]
      }
    }
  }

  state;

  onFormChange = (e) => {

    const name = e.target.id;
    const value = e.target.value;

    let updatedForm = { ...this.state.formElements };
    updatedForm[name] = value;

    this.setState(
      {
        formElements: updatedForm
      }
    );
  }

  onFormSubmit = (e) => {

    e.preventDefault();

    this.setState((state, props) => {
      return ({
        list: [...state.list,
        {
          counter: state.counter,
          foodName: state.formElements.foodName,
          foodCost: state.formElements.foodCost,
          editFoodName: state.formElements.foodName,
          editFoodCost: state.formElements.foodCost,
          editFormChange: this.onEditFormChange,    //must not bind here, call it with (e) at where button exists
          editRow: this.editItemHandler.bind(this),    //will bind counter & return data later
          deleteRow: this.deleteItemHandler.bind(this, state.counter)   //bind with this & an identical number, so we can know which row's button
        }],
        counter: state.counter++,
        formElements:
        {
          foodName: '',
          foodCost: PRICE[0]
        }
      });
    });
  }

  editItemHandler = (id, data) => {
    
    const row = this.state.list.filter((item) => item.counter === id);
    const deletedTable = this.state.list.filter((item) => item.counter !== id);

    row[0].foodName = data.editFoodName;
    row[0].foodCost = data.editFoodCost;

    this.setState((state, props) => {
      return({
        list: [...deletedTable, {...row[0]}]
      });
    })
  }

  deleteItemHandler = (id) => {

    const deletedList = this.state.list.filter((item) => item.counter !== id);

    this.setState((state, props) => {
      return ({
        list: deletedList
      });
    });
  }

  render() {
    return (
      <>
        <div className="main container-fluid">
          <div className="table-responsive">
            <Table data={this.state.list} PRICE={PRICE} />
          </div>
          <div className="mx-auto text-center w-25">
            <FoodForm formElements={this.state.formElements}
              formSubmit={this.onFormSubmit} formChange={this.onFormChange} PRICE={PRICE} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
