import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import favicon from "./assets/uteseal.svg";

// Inject the favicon link into the <head>, as a cached busting solution
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/svg+xml";
link.href = favicon;
document.head.appendChild(link);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
