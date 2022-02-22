import React from "react";
import Funccomp from "./Assignment1/Funccomp";
import Classcomp from "./Assignment1/Classcomp";
import "./Assignment1/Index.css";

class App extends React.Component {
  state = {
    showClass: true,
    showFunc: true,
  };
  render() {
    return (
      <div>
        <h1 className="minus">Styling using Functional and Class Component</h1>
        <button
          onClick={() => this.setState({ showFunc: !this.state.showFunc })}
          className="first"
        >
          To see styling in functional component
        </button>
        <button
          onClick={() => this.setState({ showClass: !this.state.showClass })}
          className="second"
        >
          To see styling in class component
        </button>
        {this.state.showFunc && <Funccomp /> ? null : <Funccomp />}
        {this.state.showClass && <Classcomp /> ? null : <Classcomp />}
      </div>
    );
  }
}

export default App;
