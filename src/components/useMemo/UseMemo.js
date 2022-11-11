import React, { useMemo, useState } from "react";

function UseMemoChild({ multiply }) {
  const [count, setCount] = useState(0);
  const multipliedValue = useMemo(() => {
    return count * multiply;
  }, [count, multiply]);
  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      The count is {count}
      <button onClick={increment}>+</button>
      <div>Multiplied value is {multipliedValue}</div>
    </div>
  );
}

export default function UseMemo() {
  return (
    <div>
      <UseMemoChild multiply={2} />
    </div>
  );
}
