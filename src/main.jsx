import React from "react";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";
store.subscribe(() => console.log(store.getState()));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
