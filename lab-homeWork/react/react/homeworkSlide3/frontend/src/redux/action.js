import localStorageService from '../services/localStorageService';

const SOCKET = 'http://localhost:3001'

// const login = (formData) => {
//     return (dispatch) => {
//         fetch(SOCKET + '/users/login', {
//             method: 'post',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify(formData)
//         }).then((response) => {
//             if (response.status === 200) {
//                 response.text().then((result) => {
//                     // console.log(result);
//                     localStorageService.setToken(JSON.parse(result).token);
//                     dispatch({
//                         type: 'LOGIN',
//                         // payload: JSON.parse(result).token
//                         payload: formData.username
//                     });
//                 });
//             } else if(response.status === 400) {
//                 // console.log("ho");
//                 response.text().then((result)=>{
// console.log(result);
// return (dispatch) => {
//     dispatch({
//         type: 'ERROR',
//         payload: JSON.parse(result).message
//     });
// }
//                 });
//             }
//         }).catch(err => {
//             // console.log("hej");
//             console.log(`error: ${err}`);
//         });
//     }
// }

//same as above
const login = (formData) => {
    return async (dispatch) => {
        try {
            const response = await fetch(SOCKET + '/users/login', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.status === 200) {
                const result = await response.text();
                // console.log(result);
                localStorageService.setToken(JSON.parse(result).token);
                dispatch({
                    type: 'LOGIN',
                    // payload: JSON.parse(result).token
                    payload: formData.username
                });
            } else if (response.status === 400) {
                const result = await response.text();
                // console.log(result);
                dispatch({      //show error notification
                    type: 'ERROR',
                    payload: JSON.parse(result).message
                });
            }
        } catch (err) {
            console.log(`error: ${err}`);
        }
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

const forgotPassword = (formData) => {
    return async (dispatch) => {
        try {
            const response = await fetch(SOCKET + '/users/forgotPassword', {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.status === 200) {
                const result = await response.text();
                // console.log(result);

                dispatch({      //show reset password notification
                    type: 'FORGOT_PASSWORD',
                    payload: `Password reset link has been sent to ${formData.email}. Please check your inbox.`
                });
            } else if (response.status === 400) {
                const result = await response.text();
                // console.log(result);
                dispatch({      //show error notification
                    type: 'ERROR',
                    payload: JSON.parse(result).message
                });
            }
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }
};

export default {
    login,
    logoff,
    forgotPassword
};