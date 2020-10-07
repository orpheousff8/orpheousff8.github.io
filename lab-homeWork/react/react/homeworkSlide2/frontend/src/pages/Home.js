import React, { useState, useEffect } from 'react';
// import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import PikkaCardDeck from './PikkaCardDeck';

const Home = (props) => {
    const [queryState, setQueryState] = useState("");
    const [resultState, setResultState] = useState([]);

    const onFormChange = (e) => {
        const value = e.target.value;

        setQueryState(value);
    }

    useEffect(() => {
        //If use 'if' when clear the search box, the result won't clear (because no query is made)
        // if(queryState) {
            submit(queryState);
        // }
    }, [queryState]);

    const submit = async (caption) => {
        const socket = 'http://localhost:3001';
        let data = "";

        try {
            const response = await fetch(socket + '/search/' + caption);
            if(response.status === 200)
            {
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
                <Form className="w-50 mx-auto">
                    <Form.Control className="mr-sm-2"
                        type="text" placeholder="Search Pikka"
                        value={queryState}
                        onChange={(e) => onFormChange(e)}
                    />
                </Form>
                <br />
                {   
                    resultState &&
                    (
                        <PikkaCardDeck {...resultState} />
                        // resultState.map((item) => {
                        //     return <PikkaCard {...item}/>
                        // })
                    )
                    // <PikkaCard {...resultState} />
                }
            {/* </Container> */}
        </>
    );
}
export default Home;