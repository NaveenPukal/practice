import React from "react";

export default function Varletconst() {
  function callfun(val) {
    var x;
    if (val == "naveen") {
      x = "correct";
    } else {
      x = "not correct";
    }
    console.log(x);
  }
  callfun("naveen");
  return (
    <div>
      <h1></h1>
      <h1>Welcome</h1>
    </div>
  );
}
