import React, { useState } from 'react';
import EditForm from './EditForm';

const Row = (props) => {

    const [rowEditState, setRowEditState] = useState({
        isEditing: false,
    });
    const [rowValueState, setRowValueState] = useState({
        editFormElements:
        {
            editFoodName: props.foodName,
            editFoodCost: props.editFoodCost
        }
    });

    const onToggleForm = () => {
        setRowEditState(
            {
                isEditing: !rowEditState.isEditing
            }
        );
    }
    const onConfirmEdit = () => {
        props.editRow(rowValueState.editFormElements);
        setRowEditState(
            {
                isEditing: false
            }
        );
    }
    const onCancelEdit = () => {
        setRowEditState(
            {
                isEditing: false
            }
        );
    }

    const onEditFormChange = (e) => {

        const name = e.target.id;
        const value = e.target.value;

        const updatedEditForm = { ...rowValueState.editFormElements };
        updatedEditForm[name] = value;

        setRowValueState(
            {
                editFormElements: updatedEditForm
            }
        );
    }

    return (
        <>
            <tr>
                <td>{props.counter}</td>
                <td className="w-25">{props.foodName}</td>
                <td>{props.foodCost}</td>
                <td className="w-50">
                    <div className="text-center">
                        <button type="button" className="btn btn-primary mr-2" onClick={onToggleForm}>Edit</button>
                        <button type="button" className="btn btn-danger mr-2" onClick={props.deleteRow}>Delete</button>
                        <button type="button" className="btn btn-info">pending</button>
                    </div>
                    <div className="text-center">
                        {
                            rowEditState.isEditing &&
                            <EditForm {...props} {...rowValueState.editFormElements}
                                editFormChange={onEditFormChange}
                                cancelEdit={onCancelEdit} confirmEdit={onConfirmEdit} />
                        }
                    </div>
                </td>
            </tr>
        </>
    );
}
export default Row;