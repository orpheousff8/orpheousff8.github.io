import React, { useState } from 'react';
import EditForm from './EditForm';

const Row = (props) => {

    const [rowState, setRowState] = useState({
        isEditing: false
    })

    const onToggleForm = () => {
        setRowState(
            {
                isEditing: !rowState.isEditing
            }
        );
    }
    const onConfirmEdit = () => {
        props.editRow();
        setRowState(
            {
                isEditing: false
            }
        );
    }
    const onCancelEdit = () => {
        setRowState(
            {
                isEditing: false
            }
        );
    }

    const onDeleteRow = () => {
        props.deleteRow();
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
                        <button type="button" className="btn btn-danger mr-2" onClick={onDeleteRow}>Delete</button>
                        <button type="button" className="btn btn-info">pending</button>
                    </div>
                    <div className="text-center">
                        {
                            rowState.isEditing &&
                            <EditForm {...props} cancelEdit={onCancelEdit} confirmEdit={onConfirmEdit} />
                        }
                    </div>
                </td>
            </tr>
        </>
    );
}
export default Row;