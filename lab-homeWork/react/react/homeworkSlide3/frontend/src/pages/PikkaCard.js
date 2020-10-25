import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import image from '../image.svg';
import PikkaLike from './PikkaLike';
import localStorageService from '../services/localStorageService';

const PikkaCard = (props) => {

    const SOCKET = 'http://localhost:3001';

    const userSelector = useSelector(state => state.user);

    const [likeState, setLikeState] = useState(false);

    const queryLike = useCallback(async () => {
        let data = null;

        try {
            const response = await fetch(SOCKET + '/likes/search/?pikkaId=' + props.id, {
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

        if (data === null) {
            setLikeState(false);      //make it false if no isLike exists in DB (null)
        } else {
            setLikeState(Boolean(data[0].isLike));
        }
    }, [props.id]);

    useEffect(() => {
        if (userSelector !== "guest") queryLike();
    }, [userSelector, queryLike]);

    const updateLike = async () => {
        try {
            const response = await fetch(SOCKET + '/likes/update', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + localStorageService.getToken()
                },
                body: JSON.stringify({ pikkaId: props.id })
            });

            queryLike();   //reQuery like
        }
        catch (err) {
            console.log(`error: ${err}`);
        }
    }

    return (
        <>
            <Card className="mt-3" style={{ width: '18rem' }}>
                <PikkaLike isLike={likeState} updateLike={() => updateLike()} />
                <Card.Img variant="top" src={image} />
                {/* <Card.Img variant="top" src={props.image} /> */}
                <Card.Body>
                    <Card.Title>Caption: {props.caption}</Card.Title>
                    <Card.Text>ID: {props.id}</Card.Text>
                    <Card.Text>Image src: {props.imgSrc}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
export default PikkaCard;