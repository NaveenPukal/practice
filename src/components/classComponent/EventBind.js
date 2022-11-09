import React from "react";

class EventBind extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "hello",
    };
  }
  clickHandler() {
    this.setState({
      message: "Good Bye",
    });
  }
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default EventBind;
