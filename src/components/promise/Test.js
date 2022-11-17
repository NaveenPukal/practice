import React from "react";

export default function Test() {
  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

  return (
    <div>
      {cars.map((hello) => (
        <div>{hello}</div>
      ))}
    </div>
  );
}
