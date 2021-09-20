import React from "react";
import ReactDom from "react-dom";
import { createMemoryHistory, createBrowserHistory} from 'history';
import App from "./App";

//Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialPathEntries: [initialPath],
  });
  if(onNavigate){
    history.listen(onNavigate);
  }

  ReactDom.render(<App history={history} />, el);

  return {
    onParentNavigate({pathname: nextPathname}) {
      const { pathname } = history.location;
      if(pathname !== nextPathname){
        history.push(nextPathname);
      }
      
    }
  }
};

//If we are in development and isolation call mount function immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot,{ defaultHistory: createBrowserHistory() });
  }
}

//Application is running through container so we should export the mount function
export { mount };
