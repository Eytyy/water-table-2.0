import React from "react";
import styled from "styled-components";

const IntroStyles = styled.section`
  padding: 60px;
  .section__header {
    margin-bottom: 50px;
  }
  .section {
    margin-bottom: 110px;
    &:last-child {
      margin-bottom: 0;
    }
    p {
      font-size: 28px;
      margin-bottom: 2em;
      line-height: 1.35em;
    }
  }
  .title {
    font-size: 72px;
    margin: 0;
  }
  .sub-title {
    font-size: 36px;
    margin: 0;
  }
`;

const Intro = () => {
  return (
    <IntroStyles>
      <section className="section">
        <header className="section__header">
          <h1 className="title">Water In Jordan</h1>
        </header>
        <p>
          Intro about the water situation in Jordan, dolor sit amet, tut
          consectetuer adipiscing elit, diam nonummy nibh euismod tincidunt ut
          laoreet lorem ipsum dolore consectetuer adipiscing elit, diam nonummy
          nibh euismod tincidunt ut laoreet lorem ipsum dolore.
        </p>
        <p>
          Brief information about the dead sea, dolor sit amet, tut consectetuer
          adipiscing elit, diam nonummy nibh euismod tincidunt ut laoreet lorem
          ipsum dolore.
        </p>
      </section>
      <section className="section">
        <header className="section__header">
          <h1 className="title">Story</h1>
          <h2 className="sub-title">Timeline, Population, and Supply</h2>
        </header>
        <p>
          Brief text about the story and visualization and how to use the
          timeline to navigate .... dolor sit amet, tut consectetuer adipiscing
          elit, diam nonummy nibh euismod tincidunt ut laoreet lorem ipsum
          dolore consectetuer adipiscing elit, diam nonummy nibh euismod
          tincidunt ut laoreet lorem ipsum dolore.
        </p>
      </section>
    </IntroStyles>
  );
};

export default Intro;
