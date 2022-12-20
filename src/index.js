import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

import "./styles.css";

var mountNode = document.getElementById("root");
// ReactDOM.render(<App name="Jane" />, mountNode);
const root = ReactDOM.createRoot(mountNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
