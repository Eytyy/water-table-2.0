import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import Layout from "./Layout";
import Styles from "../../styles/controller/controller.scss";

render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById("controller")
);
