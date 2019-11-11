import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";

import Landing from "./Landing";
import Story from "./StoryVisualization/Container";
import Map from "./Map/Map";
import { socket } from "../api";

const Layout = ({ history, location }) => {
  useEffect(() => {
    startListeningToIncomingEvents();
    return function cleanup() {
      stopListeningToIncomingEvents();
    };
  }, []);

  const navigate = to => history.push(`/table/${to}`);

  const onIncomingEvents = message => {
    const { event, payload } = message;
    switch (event) {
      case "poolClicked":
        break;
      case "navigate":
        navigate(payload);
        break;
      default:
        return;
    }
  };

  const startListeningToIncomingEvents = () =>
    socket.on("controller", onIncomingEvents);

  const stopListeningToIncomingEvents = () =>
    socket.off("controller", onIncomingEvents);

  const onLanding = location.pathname === "/table";

  return (
    <div className={`container ${onLanding ? "landing" : ""}`}>
      <Route path="/table" exact component={Landing} />
      <Route path="/table/story-viz" exact component={Story} />
      <Route path="/table/map" exact component={Map} />
    </div>
  );
};

export default withRouter(Layout);
