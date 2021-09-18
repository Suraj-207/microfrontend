import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//Mount function to start up the app
const mount = (el) => {
  ReactDom.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//If we are in development and isolation call mount function immediately
export { mount };
