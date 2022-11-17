import React, { useState } from "react";

export default function Test1() {
  const initialValue = "";

  const [message, setMessage] = useState(initialValue);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setMessage(`Welcome ${message}`);
    setShow(true);

    setTimeout(() => {
      setMessage("continue");
    }, 3000);
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <h1>Click the button</h1>
      <br></br>
      <br></br>
      <input type="text" onChange={handleChange}></input>
      <br></br>
      <button onClick={handleClick}>Click to change</button>
      <br></br>
      <br></br>
      <h3>{show === true ? message : ""}</h3>
      <br></br>
      <br></br>
    </div>
  );
}
