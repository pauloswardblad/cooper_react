import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
//import BmiApp from "./BmiApp";
import Testing from "./Testing";

axios.defaults.baseURL = "http://localhost:3000/api/v1";

ReactDOM.render(<Testing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
