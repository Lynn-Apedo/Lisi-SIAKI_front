import React, { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './sass/App.scss';

import ContextAuth from "./components/authentification/ContextAuth";
import Reducer from "./components/authentification/Reducer";

import Routes from "./routes/Routes";
import Header from "./components/organisms/Header";

var initialState;
if (localStorage.getItem("user")) {
    initialState = {
        isAuthenticated: true,
        token: localStorage.getItem("token"),
        user: localStorage.getItem("user"),
    };
} else {
    initialState = {
        isAuthenticated: false,
        token: null,
        user: null,
    }
}


export default function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const contextAuth = {
    state, 
    dispatch,
  }
  return (
    <>
      <ContextAuth.Provider value={contextAuth}>
        <Router>
          <Header />
          <Routes />
        </Router>
      </ContextAuth.Provider>
      
      {/* <h2>HELLO MOTO</h2> */}
    </>
  );
}


