import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const loader = document.querySelector(".loader");

const hideLoader = () => loader.classList.add("loader--hide");
const showLoader = () => loader.classList.remove("loader--hide");

setTimeout(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App hideLoader={hideLoader} showLoader={showLoader} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
