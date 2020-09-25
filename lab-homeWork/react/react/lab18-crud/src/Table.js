import React from 'react';
import Row from './Row';

const Table = (props) => {
    return (
        <>
            <table className="table table-bordered table-dark table-hover w-100 mx-auto">
                <tbody>
                    {
                        props.data.map((formElement) => {
                            return (
                                <Row key={formElement.counter} {...formElement} PRICE={props.PRICE}/>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}
export default Table;