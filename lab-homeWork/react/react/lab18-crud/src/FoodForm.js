import React from 'react';

const FoodForm = (props) => {
    const onFormSubmit = (e) => {
        props.formSubmit(e);
    }
    const onFormChange = (e) => {
        props.formChange(e);
    }
    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="foodName">Food name</label>
                    <input type="text" className="form-control" id="foodName"
                     value={props.formElements['foodName'].value} onChange={onFormChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="foodCost">Food cost</label>
                    <select className="custom-select" id="foodCost"
                     value={props.formElements['foodCost'].value} onChange={onFormChange} required>
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