import localStorageService from '../services/localStorageService';

const getUserFromToken = () => {
    const now = new Date();
    const exp = localStorageService.getExp();
    if (exp === 0) {        //no token exists
        return "guest";
    }
    const expTime = new Date(exp * 1000);  //Javascript time unit is millisecond, whilst JWT time unit is second since 1 Jan 1970

    if (now >= expTime) {        //token expired
        localStorageService.removeToken();
        // console.log(now);
        // console.log(expTime);
        return "guest";
    }

    return localStorageService.getUser();
};

const initialState = {
    user: getUserFromToken(),
    error: {
        status: false,
        message: ""
    },
    notification: {
        status: false,
        message: ""
    }
};

const reducer = (state = initialState, action) => {

    let newState;

    switch (action.type) {
        case 'LOGIN':
            newState = {
                ...state,
                user: action.payload,
                error: {
                    status: false,
                    message: ""
                }
                // token: action.payload
            }
            return newState;
        case 'LOGOFF':
            newState = {
                ...state,
                user: "guest",
                error: {
                    status: false,
                    message: ""
                }
                // token: null
            }
            return newState;
        case 'ERROR':
            newState = {
                ...state,
                error: {
                    status: true,
                    message: action.payload
                }
            }
            return newState;
        case 'FORGOT_PASSWORD':
            newState = {
                ...state,
                error: {
                    status: false,
                    message: ""
                },
                notification: {
                    status: true,
                    message: action.payload
                }
            }
            return newState;
        default:
            return state;
    }
};

export default reducer;