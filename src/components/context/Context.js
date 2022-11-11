import React, { useState } from "react";

const userContext = React.createContext({});

function Parent() {
  return (
    <userContext.Provider
      value={{
        email: "naveen@gmail.com",
        name: "naveen",
      }}
    >
      <div>
        <Child />
      </div>
    </userContext.Provider>
  );
}
function Child() {
  return (
    <div>
      <GrandChild />
    </div>
  );
}
function GrandChild() {
  return (
    <userContext.Consumer>
      {(value) => {
        return (
          <div>
            <h3>
              {value.email} - {value.name}
            </h3>
          </div>
        );
      }}
    </userContext.Consumer>
  );
}

export default function Context() {
  return (
    <div>
      <Parent />
    </div>
  );
}
