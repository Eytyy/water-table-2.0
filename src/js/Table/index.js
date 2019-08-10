import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import Main from "./Main";
import Styles from "../../styles/table/table.scss";
import API from "../api";

render(
  <Router>
    <API>
      <Main />
    </API>
  </Router>,
  document.getElementById("table")
);
