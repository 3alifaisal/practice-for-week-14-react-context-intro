import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HoroscopeContext } from "./context/HoroscopeContext";
import SideCard from "./components/SideCard";

const Root = () => {
  return (
    <HoroscopeContext.Provider value={{ sign: "leo" }}>
      <App />
    </HoroscopeContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
