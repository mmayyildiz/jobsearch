import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./components/main";
import "./index.css";

ReactDOM.render(
  <Home name="Veysel" age={27} />,
  document.getElementById("app")
);
