import React from "react";
import Inline from "./Inline";

class Classcomp extends React.Component {
  render() {
    return (
      <div className="box2">
        <p className="third">This is created using class Component</p>
        <p className="fourth">This is done using external CSS</p>
        <Inline />
      </div>
    );
  }
}

export default Classcomp;
