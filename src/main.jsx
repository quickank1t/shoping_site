import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./input.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="aryan-auth.eu.auth0.com"
      clientId="y9R8KDtvI70yggpTBxm2s1rAFRYDG0xU"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
