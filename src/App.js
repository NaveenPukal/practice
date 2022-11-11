import logo from "./logo.svg";
import "./App.css";
// import Welcome from "./components/classComponent/Welcome";
import Greet from "./components/functionalComponent/Greet";
import Message from "./components/classComponent/Message";
import Subscribe from "./components/functionalComponent/Subscribe";
import Counter from "./components/classComponent/Counter";
import EventBind from "./components/classComponent/EventBind";
import ParentComponent from "./components/classComponent/ParentComponent";
import CallBackEx from "./components/callback/CallBackEx";
import Varletconst from "./components/varLetConst/Varletconst";
import Context from "./components/context/Context";
import UseContext from "./components/context/UseContext";
import UseMemo from "./components/useMemo/UseMemo";
import UseCallBack from "./components/callback/UseCallBack";
import ApiTest from "./components/api/ApiTest";

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
      {/* <ParentComponent /> */}
      {/* <CallBackEx /> */}
      {/* <Varletconst /> */}
      {/* <Context /> */}
      {/* <UseContext /> */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
      <ApiTest />
    </div>
  );
}

export default App;
