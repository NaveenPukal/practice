import React from "react";

export default function Greet(props) {
  var name1 = ["naveen", "vicky", "arul"];
  //   var name2 = "welcome";
  const handle = () => {
    alert("\n" + name1);
  };
  const { name, age } = props;
  return (
    <div>
      <h1>
        Hello {name} your age is {age}
      </h1>
      <button onClick={handle}>click</button>
    </div>
  );
}
