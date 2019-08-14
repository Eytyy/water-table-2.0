import React, { Component } from "react";
import LayerContext from "./LayerContext";

const WithContext = WrappedComponent =>
  class WithContextWrapper extends Component {
    render() {
      return (
        <LayerContext.Consumer>
          {activeLayer => (
            <WrappedComponent activeLayer={activeLayer} {...this.props} />
          )}
        </LayerContext.Consumer>
      );
    }
  };

export default WithContext;
