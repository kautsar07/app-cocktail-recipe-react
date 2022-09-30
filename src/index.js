import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./component/Home/App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import Cocktails from "./component/Cocktail/Cocktails.js"
import Ordinary from "./component/Ordinary/Ordinary.js"
import Beer from "./component/Beer/Beer.js"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Cocktails" element={<Cocktails />} />
        <Route path="/Ordinary" element={<Ordinary />} />
        <Route path="/Beer" element={<Beer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
