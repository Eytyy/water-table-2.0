import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import Controller from "./Controller";
import Styles from "../../styles/controller/controller.scss";
import API from "../api";

render(
  <Router>
    <API>
      <Controller />
    </API>
  </Router>,
  document.getElementById("controller")
);
