import React from "react";

export default function CallBackEx() {
  function mainfun(getcallback) {
    console.log("From main function");
    console.log(getcallback);
  }
  function callback() {
    console.log("From callback");
  }
  mainfun(callback);
  return <div> </div>;
}
