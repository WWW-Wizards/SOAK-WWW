// Init NR browser agent
import { BrowserAgent } from "@newrelic/browser-agent";
const options = {
  init: {
    privacy: { cookies_enabled: true },
    page_view_timing: { enabled: true },
    spa: { enabled: true },
    ajax: { deny_list: ["bam.nr-data.net"] },
    distributed_tracing: { enabled: false },
  },
  info: {
    beacon: "bam.nr-data.net",
    errorBeacon: "bam.nr-data.net",
    licenseKey: "NRJS-951885a3654f8493a1b",
    applicationID: "1134551812",
    sa: 1,
  },
  loader_config: {
    accountID: "6708047",
    trustKey: "6708047",
    agentID: "1134581579",
    licenseKey: "NRJS-e61e46c846a887a7424",
    applicationID: "1134581579",
  },
};
new BrowserAgent(options);

import { createRoot } from "react-dom/client";
import { StateProvider } from "./state/StateProvider";
import App from "./App";

navigator.serviceWorker.register(
  new URL("service-worker.js", import.meta.url),
  { type: "module" }
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <StateProvider>
    <App />
  </StateProvider>
);
