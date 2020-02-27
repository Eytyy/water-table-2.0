import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import Layout from "./Layout";
import GlobalStyles from "../../styles/globalStyles";
import Styles from "../../styles/table/table.scss";

render(
  <Router>
    <>
      <GlobalStyles />
      <Layout />
    </>
  </Router>,
  document.getElementById("table")
);
