import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Mainfile from "./NGO_@WEBSITE/Mainfile";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import Mainfile from './NGO_@WEBSITE/Mainfile';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./NGO_Website/Redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
