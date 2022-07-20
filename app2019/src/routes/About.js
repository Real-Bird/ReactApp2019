import React, { Component } from "react";
import "./About.css";
import LifeCycleSample from "./LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
class About extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={this.handleClick}>Random Color</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default About;
