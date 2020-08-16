import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { StripeProvider } from 'react-stripe-elements'

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://news-on-rails-api.herokuapp.com/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(
  <BrowserRouter>
    <StripeProvider apiKey={process.env.REACT_APP_API_KEY}>
      <App />
    </StripeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();