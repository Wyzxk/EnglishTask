import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Turism from "./Turism.jsx";
import Yaguas from "./Yaguas.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" Component={App} />
        <Route exact path="/turism" Component={Turism} />
        <Route exact path="/yaguas" Component={Yaguas} />
      </Routes>
    </Router>
  </React.StrictMode>
);
