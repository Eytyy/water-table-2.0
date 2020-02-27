import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import styled from "styled-components";

import Landing from "./Landing";
import Story from "./StoryVisualization/Container";
import Map from "./Map/Map";
import { socket } from "../api";

const TableStyles = styled.div`
  width: 1080px;
  height: 1920px;
  position: relative;
  overflow: hidden;
  &.landing {
    width: 100%;
    background: url("../../images/intro.png") no-repeat center top;
    background-size: 100%;
  }
  .layer,
  .resources--pools {
    position: absolute;
    top: 0;
    left: 0;
  }
  .layer {
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 200ms linear;
  }
  .layer--pools {
    opacity: 0.4;
  }
  .layer--is-active {
    opacity: 1;
  }
`;

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
    <TableStyles className={`container ${onLanding ? "landing" : ""}`}>
      <Route path="/table" exact component={Landing} />
      <Route path="/table/story-viz" exact component={Story} />
      <Route path="/table/map" exact component={Map} />
    </TableStyles>
  );
};

export default withRouter(Layout);
