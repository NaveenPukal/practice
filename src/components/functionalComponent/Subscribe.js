import React, { useState } from "react";

export default function Subscribe() {
  var message = "Welcome Visitor";
  const [change, setChange] = useState(message);
  const handleChange = () => {
    setChange("Thank you for subscribing");
  };
  return (
    <div>
      <h1>{change}</h1>

      <button onClick={handleChange}>Subscribe</button>
    </div>
  );
}
