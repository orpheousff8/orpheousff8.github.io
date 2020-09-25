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
      },
      editFormElements:
      {
        editFoodName: '',
        editFoodCost: PRICE[0]
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

  onEditFormChange = (e) => {

    const name = e.target.id;
    const value = e.target.value;

    let updatedEditForm = { ...this.state.editFormElements };
    updatedEditForm[name] = value;

    this.setState(
      {
        editFormElements: updatedEditForm
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
          editFormChange: this.onEditFormChange,
          editRow: this.editItemHandler.bind(this, state.counter),
          deleteRow: this.deleteItemHandler.bind(this, state.counter)
        }],
        counter: state.counter++,
        formElements:
        {
          foodName: '',
          foodCost: PRICE[0]
        },
        editFormElements:
        {
          editFoodName: '',
          editFoodCost: PRICE[0]
        }
      });
    });
  }

  editItemHandler = (id) => {
    
    let table = this.state.list;
    let row;
    row = table.filter((item) => item.counter === id);
    const deletedTable = table.filter((item) => item.counter !== id);

    row[0].foodName = this.state.editFormElements.editFoodName;
    row[0].foodCost = this.state.editFormElements.editFoodCost;

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
