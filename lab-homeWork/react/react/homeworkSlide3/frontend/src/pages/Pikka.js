import React, { useState, useEffect, useCallback } from 'react';
// import Container from 'react-bootstrap/esm/Container';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import PikkaSocial from './PikkaSocial';
import '../css/styles.css';

const Pikka = (props) => {

    const SOCKET = 'http://localhost:3001';

    const [resultState, setResultState] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const callbackQueryByParams = useCallback(async () => {
        let data = "";

        try {
            const response = await fetch(SOCKET + '/pikkas/search/' + props.match.params.id);
            if (response.status === 200) {
                data = await response.json();       //if found nothing will return [] with code 200 anyway
            }
            // console.log(response);
            // console.log(data);
        } catch (err) {
            console.log(err);
        }
        // console.log(data);
        setResultState(data[0]);
    }, [props.match.params.id]);

    useEffect(() => {
        setShowModal(true);
        callbackQueryByParams();

        setTimeout(() => {
            setShowModal(false);
        }, 1000);
    }, [callbackQueryByParams]);

    return (
        <>
            <Modal show={showModal} centered size="sm">
                <Modal.Body><Spinner className="d-block mx-auto" animation="border" variant="info" /></Modal.Body>
            </Modal>

            {
                !showModal &&
                <PikkaSocial queryId={props.match.params.id} {...resultState} />    //send id from props.match.params.id to Child instead of the id that got from DB, because it's asynchronous. we need an id to search for comments
            }
        </>
    );
};

export default Pikka;