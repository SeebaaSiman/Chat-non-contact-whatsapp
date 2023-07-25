import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./language/LanguageContext.jsx";
import { App } from "./App.jsx";
import { StylesGlobal } from "./style/StylesGlobal.js";
import { Footer } from "./components/footer/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StylesGlobal />
    <LanguageProvider>
      <App />
    </LanguageProvider>
    <Footer />
  </React.StrictMode>
);
