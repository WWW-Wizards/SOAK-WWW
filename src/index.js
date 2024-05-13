import { createRoot } from "react-dom/client";
import { App } from "./App";
import { UserProvider } from './state/UserProvider';

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);