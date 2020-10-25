const jwt = require('jsonwebtoken');

const setToken = (token) => {
    // console.log("SET TOKEN");
    localStorage.setItem("ACCESS_TOKEN", token);
};

const getToken = () => {
    // console.log("GET TOKEN");
    return localStorage.getItem("ACCESS_TOKEN");
};

const removeToken = () => {
    // console.log("REMOVE TOKEN");
    localStorage.removeItem("ACCESS_TOKEN");
};

const getUser = () => {
    // console.log("GET USER");
    const token = getToken();
    if (token) {
        const decoded = jwt.decode(token);
        // console.log(decoded);
        return decoded.username;
    }
    return "guest";
};

const getExp = () => {
    // console.log("GET EXP");
    const token = getToken();
    if (token) {
        const decoded = jwt.decode(token);
        return decoded.exp;
    }
    return 0;
}

export default {
    setToken,
    getToken,
    removeToken,
    getUser,
    getExp
};