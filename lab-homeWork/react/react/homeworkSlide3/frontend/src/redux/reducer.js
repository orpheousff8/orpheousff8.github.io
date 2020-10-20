const initialState = {
    user: 'guest',
    // token: ''
};

const reducer = (state = initialState, action) => {

    let newState;

    switch(action.type) {
        case 'LOGIN':
            newState = {
                ...state,
                user: action.payload,
                // token: action.payload
            }
            return newState;
        case 'LOGOFF':
            newState = {
                ...state,
                user: "guest",
                // token: null
            }
            return newState;
        default:
            return state;
    }
};

export default reducer;