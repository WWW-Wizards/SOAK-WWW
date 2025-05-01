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

console.log("index.js");
navigator.serviceWorker.register(
  new URL("service-worker.js", import.meta.url),
  { type: "module" }
);

async function enableMocking() {
  // This is set by parcel
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
const container = document.getElementById("app");
const root = createRoot(container);
enableMocking().then(() => {
  root.render(
    <StateProvider>
      <App />
    </StateProvider>
  );
});
