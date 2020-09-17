import React, { Component } from "react";

export default class resultDisplay extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <p>{result.slice(0, 17)}</p>
      </div>
    );
  }
}
