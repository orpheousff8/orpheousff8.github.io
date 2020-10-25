import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PikkaLike = (props) => {

    const userSelector = useSelector(state => state.user);

    return (
        <Card.Header>
            {
                (userSelector !== "guest") && props.isLike && 
                <FontAwesomeIcon icon={['fas', 'thumbs-up']} onClick={()=>props.updateLike()} />
            }
            {
                (userSelector !== "guest") && !props.isLike && 
                <FontAwesomeIcon icon={['far', 'thumbs-up']} onClick={()=>props.updateLike()} />
            }
        </Card.Header>
    );
}

export default PikkaLike;