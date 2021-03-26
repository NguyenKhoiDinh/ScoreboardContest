import React, { Component } from "react";
import App from "./App";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      theme: false,
    };
  }
  switchTheme = () => {
    this.setState({
      theme: !this.state.theme,
    });
  };
  render() {
    const lightStyle = {
      backgroundColor: "white",
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      overflow: "auto",
    };
    const darkStyle = {
      backgroundColor: "black",
      position: "absolute",
      top: "0px",
      left: "0px",
      width: "100%",
      height: "100%",
      overflow: "auto",
    };
    if (this.state.theme === true) {
      return (
        <div style={lightStyle}>
          <App switchTheme={this.switchTheme} theme={this.state.theme} />
        </div>
      );
    } else {
      return (
        <div style={darkStyle}>
          <App switchTheme={this.switchTheme} theme={this.state.theme} />
        </div>
      );
    }
  }
}
export default Main;
