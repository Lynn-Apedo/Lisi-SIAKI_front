// import React from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("token", action.payload.data.token);
            localStorage.setItem("user", JSON.stringify(action.payload.data.user));
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.data.token,
                user: action.payload.data.user,
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state, 
                isAuthenticated: false,
                user: null,
            }
            // break;
        default:
            return state;
            // break;
    }
}

export default reducer;