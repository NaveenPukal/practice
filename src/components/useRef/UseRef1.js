import React, { useEffect, useRef, useState } from "react";

export default function UseRef1() {
  const [val, setVal] = useState("");
  const count = useRef(0);
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    count.current = count.current + 1;
  }, [val]);

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
      <p>{val}</p>
      {count.current}
    </div>
  );
}
