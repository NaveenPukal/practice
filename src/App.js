import logo from "./logo.svg";
import "./App.css";
// import Welcome from "./components/classComponent/Welcome";
import Greet from "./components/functionalComponent/Greet";
import Message from "./components/classComponent/Message";
import Subscribe from "./components/functionalComponent/Subscribe";
import Counter from "./components/classComponent/Counter";
import EventBind from "./components/classComponent/EventBind";
import ParentComponent from "./components/classComponent/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <Greet name={"naveen"} age={24} /> */}
      {/* <Greet name={"Vicky"} age={30} />
      <Greet name={"Arul"} age={29} />
      <Welcome name={"naveen"} age={24} />
      <Welcome name={"Vicky"} age={30} />
      <Welcome name={"Arul"} age={29} /> */}
      {/* <Message /> */}
      {/* <Subscribe /> */}
      {/* <Counter /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
