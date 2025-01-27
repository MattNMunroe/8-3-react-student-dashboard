import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import cohortData from './data/data.json'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App students={cohortData}/>
  </React.StrictMode>
);
