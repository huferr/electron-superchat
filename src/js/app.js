import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Home />
  );
}
