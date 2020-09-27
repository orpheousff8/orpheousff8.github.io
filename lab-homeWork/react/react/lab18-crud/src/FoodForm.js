import React from 'react';

const FoodForm = (props) => {
    // const onFormSubmit = (e) => {        //can called with arrow function
    //     props.formSubmit(e);
    // }
    // const onFormChange = (e) => {
    //     props.formChange(e);
    // }
    return (
        <>
            <form onSubmit={(e) => props.formSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="foodName" id="basic-addon1">Food name</label>
                    <input type="text" className="form-control" id="foodName" aria-describedby="basic-addon1"
                     value={props.formElements['foodName'].value} onChange={(e) => props.formChange(e)}     //call with arrow function with (e)
                     autoFocus required />
                </div>
                <div className="form-group">
                    <label htmlFor="foodCost" id="basic-addon2">Food cost</label>
                    <select className="custom-select" id="foodCost" aria-describedby="basic-addon2"
                     value={props.formElements['foodCost'].value} onChange={(e) => props.formChange(e)}     //call with arrow function with (e)
                     required>
                        {props.PRICE.map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            );
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-success">Add food item</button>
            </form>
        </>
    );
}
export default FoodForm;