import { createRoot } from "react-dom/client";
import { StateProvider } from './state/StateProvider';
import App from "./App";

console.log("index.js")
const container = document.getElementById("app");
const root = createRoot(container)
root.render(
  <StateProvider>
    <App />
  </StateProvider>
);