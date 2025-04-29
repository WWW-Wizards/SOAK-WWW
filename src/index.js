import { createRoot } from "react-dom/client";
import { StateProvider } from './state/StateProvider';
import App from "./App";

console.log("index.js")
navigator.serviceWorker.register(
  new URL('service-worker.js', import.meta.url),
  {type: 'module'}
);

async function enableMocking() {
  // This is set by parcel
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}
const container = document.getElementById("app");
const root = createRoot(container)
enableMocking().then(() => {
  root.render(
    <StateProvider>
      <App />
    </StateProvider>
  );
})
