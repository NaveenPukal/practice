import React, { useEffect, useRef, useState } from "react";

export default function UseRef2() {
  //   const [state, setState] = useState("hello");
  const reff = useRef();
  //   useEffect(() => {
  //     reff.current.focus();
  //   }, []);
  const handleClick = () => {
    // setState("Hello Naveen");
    reff.current.focus();
  };
  return (
    <div>
      <input type="text" ref={reff}></input>
      <button onClick={handleClick}>click to focus</button>
    </div>
  );
}
