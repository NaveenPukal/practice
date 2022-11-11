import React, { useContext, useEffect, useState } from "react";

const userContext = React.createContext({});

function Parent() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser({
      email: "naveen@gmail.com",
      name: "naveen",
    });
  }, []);
  return (
    <userContext.Provider value={user}>
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
  const value = useContext(userContext);
  return value ? (
    <h3>
      {value.email} - {value.name}
    </h3>
  ) : (
    <h3>NO User</h3>
  );
}

export default function UseContext() {
  return (
    <div>
      <Parent />
    </div>
  );
}
