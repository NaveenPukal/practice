import React, { useState } from "react";

export default function Promise1() {
  const [message, setMessage] = useState("");

  //   const second = () => {
  //     setTimeout(() => {
  //       setMessage("Bye");
  //     }, 2000);
  //     return message;
  //   };
  const handleClick = () => {
    setMessage("Wait..");
    setTimeout(() => {
      setMessage(`Hai ${message}`);
    }, 3000);
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <h1>Welcome..Display your name</h1>

      {/* {second()} */}
      <div>
        <input type="text" onChange={handleChange}></input>
        <button onClick={handleClick}>click</button>
        <br></br>
        <br></br>
        {message}
      </div>
    </div>
  );
}
