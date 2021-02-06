import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import './sass/App.scss';

import Routes from "./routes/Routes";
import Header from "./components/organisms/Header";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes />
      </Router>
      {/* <h2>HELLO MOTO</h2> */}
    </>
  );
}

export default App;
