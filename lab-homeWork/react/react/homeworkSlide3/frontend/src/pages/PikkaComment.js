import React from 'react';
import Card from 'react-bootstrap/Card'

const PikkaComment = (props) => {
    return (
        <>
            <Card.Subtitle className="mb-2 text-muted">{props.User.username}</Card.Subtitle>
            <Card.Text>{props.comment}</Card.Text>
        </>
    );
}

export default PikkaComment;