import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import Layout from "./Layout";
import Styles from "../../styles/table/table.scss";

render(
  <Router>
    <Layout />
  </Router>,
  document.getElementById("table")
);
