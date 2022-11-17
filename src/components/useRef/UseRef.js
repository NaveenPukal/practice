import React, { useState, useRef, useEffect } from "react";

export default function UseRef() {
  const [val, setVal] = useState();
  const inputRef = useRef();
  const showDom = () => {
    console.log(inputRef.current, "dfdfd");
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      ></input>
      <br></br>
      <h1>{val}</h1>
      <button onClick={showDom}>Show Dom</button>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
}
