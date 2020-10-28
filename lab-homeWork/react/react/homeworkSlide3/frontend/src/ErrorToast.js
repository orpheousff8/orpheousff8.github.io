import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast'
import { useSelector } from 'react-redux';

const ErrorToast = (props) => {
    const errorSelector = useSelector(state => state.error);

    const [showState, setShowState] = useState(false);

    useEffect(() => {
        if(errorSelector.status) {
            setShowState(true);
        }
    }, [errorSelector.status]);

    const getTime = () => {
        const d = new Date();
        return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    }

    const toggleHide = () => {
        setShowState(false);
    }

    return (
        <>
            {
                <Toast className="d-block ml-auto" show={showState} onClose={() => toggleHide()}>
                    <Toast.Header>
                        <strong className="mr-auto text-danger">Error</strong>
                        <small className="ml-auto">{getTime()}</small>
                    </Toast.Header>
                    <Toast.Body>{errorSelector.message}</Toast.Body>
                </Toast>
            }
        </>
    );
}

export default ErrorToast;