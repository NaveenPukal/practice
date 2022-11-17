import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "naveen",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "naveen",
      });
    }, 2000);
  }
  render() {
    console.log("***************Parent comp render ******************");
    return (
      <div>
        ParentComp
        {/* <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComp;
