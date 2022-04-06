import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Login from "./components/Login";

import App from "./App";

import "./styles/App.scss";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/details" element={<MovieDetails />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Routing />);
