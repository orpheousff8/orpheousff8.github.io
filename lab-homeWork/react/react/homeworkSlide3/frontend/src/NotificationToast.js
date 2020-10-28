import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast'
import { useSelector } from 'react-redux';

const NotificationToast = (props) => {
    const notificationSelector = useSelector(state => state.notification);

    const [showState, setShowState] = useState(false);

    useEffect(() => {
        if(notificationSelector.status) {
            setShowState(true);
        }
    }, [notificationSelector.status]);

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
                        <strong className="mr-auto text-info">Notification</strong>
                        <small className="ml-auto">{getTime()}</small>
                    </Toast.Header>
                    <Toast.Body>{notificationSelector.message}</Toast.Body>
                </Toast>
            }
        </>
    );
}

export default NotificationToast;