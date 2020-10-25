import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import image from '../image.svg';
import PikkaLike from './PikkaLike';
import PikkaComment from './PikkaComment';
import localStorageService from '../services/localStorageService';

const PikkaSocial = (props) => {

    const SOCKET = 'http://localhost:3001';

    const userSelector = useSelector(state => state.user);

    const [comments, setComments] = useState([]);
    const [queryState, setQueryState] = useState("");
    const [likeState, setLikeState] = useState(false);

    const commentBoxRef = useRef(null);

    const queryPikkaComments = useCallback(async () => {
        let data = [];

        try {
            const response = await fetch(SOCKET + '/comments/search/' + props.queryId);
            if (response.status === 200) {
                data = await response.json();
            }
        } catch (err) {
            console.log(err);
        }
        setComments(data);
    }, [props.queryId]);

    useEffect(() => {
        if(props.id) queryPikkaComments();
        // commentBoxRef.current.focus();       //doesn't work, don't know why
    }, [props.id, queryPikkaComments]);

    const queryLike = useCallback(async () => {
        let data = null;

        try {
            const response = await fetch(SOCKET + '/likes/search/?pikkaId=' + props.queryId, {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorageService.getToken()
                }
            });
            if (response.status === 200) {      //will return null or json with both code 200 //(no null anymore, see below)
                data = await response.json();       //return as [{isLike:true/false}, {isCreated}]
            }
        } catch (err) {
            console.log(err);
        }

        // console.log(data);

        if (data === null) {
            setLikeState(false);      //make it false if no isLike exists in DB (null)
        } else {
            setLikeState(Boolean(data[0].isLike));
        }
    }, [props.queryId]);

    useEffect(() => {
        if(props.id) queryLike();
    }, [props.id, queryLike]);

    const onFormChange = (e) => {
        const value = e.target.value;

        if (value !== queryState) {
            setQueryState(value);
        }
    }

    const onFormSubmit = (e) => {

        e.preventDefault();
        const formData = {
            comment: queryState,
            pikkaId: props.queryId
            //userId will be retrieved from passport
        };

        // console.log(formData);
        submit(formData);
    }

    const submit = async (formData) => {
        try {
            const response = await fetch(SOCKET + '/comments/create', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorageService.getToken()
                },
                body: JSON.stringify(formData)
            });
            // const data = await response.text();
            // console.log(response);
            // console.log(data);

            setQueryState("");
            queryPikkaComments();   //reQuery all comments
            commentBoxRef.current.focus();
        }
        catch (err) {
            console.log(`error: ${err}`);
        }
    }

    const updateLike = async () => {
        try {
            const response = await fetch(SOCKET + '/likes/update', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorageService.getToken()
                },
                body: JSON.stringify({ pikkaId: props.queryId })
            });

            queryLike();   //reQuery like
        }
        catch (err) {
            console.log(`error: ${err}`);
        }
    }

    return (
        <>
            {
                props.id &&
                <Card className="mt-3 mx-auto" style={{ width: '18rem' }}>
                    <PikkaLike isLike={likeState} updateLike={() => updateLike()} />
                    <Card.Img variant="top" src={image} />
                    {/* <Card.Img variant="top" src={props.image} /> */}
                    <Card.Body>
                        <Card.Title>Caption: {props.caption}</Card.Title>
                        <Card.Text>ID: {props.id}</Card.Text>
                        <Card.Text>Image src: {props.imgSrc}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        {
                            comments.map((item) => <PikkaComment key={item.id} {...item} />)
                        }
                    </Card.Body>
                    <Card.Body>
                        <Form onSubmit={onFormSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="comment">Add a new comment</Form.Label>
                                {
                                    userSelector === "guest" &&
                                    <Form.Control
                                        type="text"
                                        id="comment"
                                        name="comment"
                                        placeholder="You must login fist."
                                        ref={commentBoxRef}     //must have this line though it's disabled, or useRed(null)'ll make an error.
                                        disabled="disabled"
                                    />
                                }
                                {
                                    userSelector !== "guest" &&
                                    <Form.Control
                                        type="text"
                                        id="comment"
                                        name="comment"
                                        value={queryState}
                                        autoFocus={true}        //seems doesn't work
                                        ref={commentBoxRef}     //this works
                                        onChange={onFormChange}
                                    />
                                }
                            </Form.Group>

                            <br />
                            <div className="text-right">
                                <Button className="ml-3" type="submit" variant="primary" disabled={userSelector === "guest" || queryState === ""}>Comment</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            }
            {
                !props.id && 
                <div className="h3 text-warning text-center">There is no Pikka whose id is {props.queryId}.</div>
            }
        </>
    );
}
export default PikkaSocial;