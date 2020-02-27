import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  .content {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 120px;
  }
  .title {
    font-size: 100px;
  }
  .text {
    font-size: 28px;
  }
`;

const Landing = () => (
  <Styled className="intro">
    <div className="content">
      <h1 className="title">Water Table</h1>
      <p className="text">
        Use the controller to
        <br />
        start your experience
      </p>
    </div>
  </Styled>
);

export default Landing;
