import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./routes/Projects"
import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  </BrowserRouter>,
  mountNode
);
