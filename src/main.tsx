import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import HomePage from "./pages/home/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
