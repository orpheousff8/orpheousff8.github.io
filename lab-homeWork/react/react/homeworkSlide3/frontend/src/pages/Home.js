import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import PikkaCardDeck from './PikkaCardDeck';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import '../css/styles.css';

const Home = (props) => {

    const SOCKET = 'http://localhost:3001';
    
    const [queryState, setQueryState] = useState("");
    const [resultState, setResultState] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const onFormChange = (e) => {
        const value = e.target.value;

        if (value !== queryState) {
            setQueryState(value);
        }
    }

    useEffect(() => {
        //If use 'if' when clear the search box, the result won't clear (because no query is made)
        // if(queryState) {
        setShowModal(true);
        submit(queryState);
        setTimeout(() => {
            setShowModal(false);
        }, 1000);
        // }
    }, [queryState]);

    const submit = async (caption) => {
        let data = "";

        try {
            const response = await fetch(SOCKET + '/pikkas/search?caption=' + caption);
            if (response.status === 200) {
                data = await response.json();
            }
            // console.log(response);
            // console.log(data);
        } catch (err) {
            console.log(err);
        }
        setResultState(data);
    }

    return (
        <>
            {/* <Container> */}

            <Modal show={showModal} size="sm" centered>
                <Modal.Body><Spinner className="d-block mx-auto" animation="border" variant="info" /></Modal.Body>
            </Modal>

            <Form className="w-50 mx-auto">
                <Form.Control className="mr-sm-2"
                    type="text" placeholder="Search Pikka"
                    value={queryState}
                    onChange={(e) => onFormChange(e)}
                />
            </Form>
            <br />
            {
                !showModal &&
                <PikkaCardDeck {...resultState} />
            }
            {/* </Container> */}
        </>
    );
}
export default Home;