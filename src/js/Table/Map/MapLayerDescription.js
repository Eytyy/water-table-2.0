import React from "react";
import styled from "styled-components";

const Description = styled.div`
  background: #000;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 380px;
  padding: 40px;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .icon {
    display: flex;
    flex: 0 0 44px;
    margin-right: 20px;
    img {
      width: 100%;
      height: auto;
      align-items: center;
    }
  }
  .title {
    font-size: 24px;
    /* font-weight: bold; */
  }
  .body {
    font-size: 18px;
  }
`;

const MapLayerDescription = ({ title, description, Icon }) => (
  <Description>
    <div className="header">
      <i className="icon">
        <Icon />
      </i>
      <span className="title">{title}</span>
    </div>
    <div className="body">{description}</div>
  </Description>
);

export default MapLayerDescription;
