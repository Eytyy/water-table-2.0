import React, { useState, useEffect } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { socket, broadcastEvent } from "../api";
import Intro from "./Intro";
import MapControls from "./Map/MapControls";
import VisualizationControls from "./Visualization/VisualizationControls";

const Layout = props => {
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    startListeningToIncomingEvents();
    return function cleanup() {
      stopListeningToIncomingEvents;
    };
  }, []);

  const isFront = () => props.location.pathname.split("/")[2] === "undefined";

  const onIncomingEvents = ({ event }) => {
    switch (event) {
      default:
        break;
    }
  };

  const startListeningToIncomingEvents = () => {
    socket.on("from-table", onIncomingEvents);
  };

  const stopListeningToIncomingEvents = () => {
    socket.off("from-table", onIncomingEvents);
  };

  const onLinkClick = to => {
    broadcastEvent({
      source: "controller",
      event: "navigate",
      payload: to
    });
  };
  console.log(lang);

  return (
    <>
      {!isFront() && (
        <Link
          onClick={() => {
            onLinkClick("");
          }}
          className="back-btn"
          to="/controller"
        >
          {" "}
          &lt; Back
        </Link>
      )}
      <Route path="/controller" exact component={Intro} />
      <Route path="/controller/map" exact component={MapControls} />
      <Route path="/controller/viz" exact component={VisualizationControls} />
      <div className="language">
        <span
          className={`lang-btn ${lang === "EN" ? "active" : ""}`}
          onClick={() => setLang("EN")}
        >
          English
        </span>
        <span
          className={`lang-btn ${lang === "AR" ? "active" : ""}`}
          onClick={() => setLang("AR")}
        >
          Arabic
        </span>
      </div>
    </>
  );
};

export default withRouter(Layout);
