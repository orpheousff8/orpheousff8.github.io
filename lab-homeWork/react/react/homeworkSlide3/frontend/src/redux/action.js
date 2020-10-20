import localStorageService from '../services/localStorageService';

const SOCKET = 'http://localhost:3001'

const login = (formData) => {
    return (dispatch) => {
        fetch(SOCKET + '/users/login', {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(formData)
        }).then((response) => {
            if (response.status === 200) {
                response.text().then((data) => {
                    console.log(data);
                    localStorageService.setToken(JSON.parse(data).token);
                    dispatch({
                        type: 'LOGIN',
                        // payload: JSON.parse(data).token
                        payload: formData.username
                    });
                });
            }
        }).catch(err => {
            console.log(`error: ${err}`);
        });
    }
}

const logoff = () => {
    return (dispatch) => {
        localStorageService.removeToken();
        dispatch({
            type: 'LOGOFF',
            payload: null
        });
    }
}

export default {
    login,
    logoff
};