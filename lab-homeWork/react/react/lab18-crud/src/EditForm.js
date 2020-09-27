import React from 'react'

const EditForm = (props) => {
    const onEditFormChange = (e) => {
        props.editFormChange(e);
    }

    return (
        <div className="row w-75">
            <div className="col">
                <div className="row input-group w-100 mx-auto my-2">
                    <div className="col-4">
                        <label htmlFor="editFoodName" id="basic-addon1">Food name</label>
                    </div>
                    <div className="col-8">
                        <input type="text" className="form-control w-100" id="editFoodName" aria-describedby="basic-addon1"
                            value={props.editFoodName} onChange={onEditFormChange} 
                            autoFocus required/>
                    </div>
                </div>
                <div className="row form-group w-75 mx-auto">
                    <div className="col-4">
                        <label htmlFor="editFoodCost" id="basic-addon2">Food cost</label>
                    </div>
                    <div className="col-8">
                        <select className="custom-select w-100" id="editFoodCost"
                            value={props.editFoodCost} aria-describedby="basic-addon2"
                            onChange={onEditFormChange} required>
                            {props.PRICE.map((item) => {
                                return (
                                    <option key={item} value={item}>{item}</option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="row w-100 mx-auto">
                    <div className="col-3"></div>
                    <button className="col btn btn-outline-primary btn-sm" onClick={props.cancelEdit}>Cancel</button>
                    <div className="col-1"></div>
                    <button className="col btn btn-primary btn-sm" onClick={props.confirmEdit}>Confirm</button>
                    <div className="col-3"></div>
                </div>
            </div>

        </div>
    );
}
export default EditForm;