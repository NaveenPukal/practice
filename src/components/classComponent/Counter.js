import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleClick() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("call back value ", this.state.count);
      }
    );
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleClick()}>Click</button>
      </div>
    );
  }
}

export default Counter;
