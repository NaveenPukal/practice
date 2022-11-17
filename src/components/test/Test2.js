import React, { useState, useRef, useEffect } from "react";

export default function Test2() {
  const init = "Welcome";
  const [name, setName] = useState(init);
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);
  const handleChange = (e) => {
    if (e.key === "Enter") {
      setName(e.target.value);
    }
  };
  const handleClick = () => {
    setShow(true);

    setName(init + " " + name);
    // reset();
  };
  useEffect(() => {
    ref.current.focus();
  }, []);
  const ref = useRef();
  const reset = () => {
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        val={name}
        onChange={handleChange}
        id="name"
        ref={ref}
      ></input>
      <button onClick={handleClick}>Click</button>
      <br></br>
      {show === false ? "" : name}
    </div>
  );
}
