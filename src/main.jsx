import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CharacterLengthContextProvider from "./context/CharacterLengthContext";
import PasswordContextProvider from "./context/PasswordContext";
import PasswordSettingsContextProvider from "./context/PasswordSettingsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordContextProvider>
    <CharacterLengthContextProvider>
      <PasswordSettingsContextProvider>
        <App />
      </PasswordSettingsContextProvider>
    </CharacterLengthContextProvider>
  </PasswordContextProvider>
);
