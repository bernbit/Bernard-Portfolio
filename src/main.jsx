import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GeneralProvider } from "./context/GeneralContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </StrictMode>,
);
