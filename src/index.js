import { createRoot } from "react-dom/client";
import { StateProvider } from './state/StateProvider';
import App from "./App";

console.log("index.js")
navigator.serviceWorker.register(
  new URL('service-worker.js', import.meta.url),
  {type: 'module'}
);
const container = document.getElementById("app");
const root = createRoot(container)
root.render(
  <StateProvider>
    <App />
  </StateProvider>
);