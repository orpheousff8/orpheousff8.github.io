import React from 'react';
import WithForm from './WithForm';

const EditPikka = (props) => {
    return (
        <WithForm queryId={props.match.params.id}>EditPikka</WithForm>
    );
}
export default EditPikka;