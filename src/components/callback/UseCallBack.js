import React, { useState } from "react";

const Button = React.memo(({ color, children }) => {
  console.log("Rendering button");
  return (
    <div>
      <button style={{ backgroundColor: color }}>{children}</button>
    </div>
  );
});

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <div>
        The count is {count}
        <button onClick={increment}>+</button>
        <Button color={"blue"}>+</Button>
      </div>
    </div>
  );
}

export default function UseCallBack() {
  return (
    <div>
      <Counter />
    </div>
  );
}
