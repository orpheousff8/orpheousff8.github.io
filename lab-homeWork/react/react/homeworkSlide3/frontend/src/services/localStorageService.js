const jwt = require('jsonwebtoken');

const setToken = (token) => {
    localStorage.setItem("ACCESS_TOKEN", token);
};

const getToken = () => {
    return localStorage.getItem("ACCESS_TOKEN");
};

const removeToken = () => {
    localStorage.removeItem("ACCESS_TOKEN");
};

const getUser = () => {
    const token = getToken();
    if (token) {
        const decoded = jwt.decode(token);
        console.log(decoded);
        return decoded.username;
    }
    return "guest";
};

export default {
    setToken,
    getToken,
    removeToken,
    getUser
};