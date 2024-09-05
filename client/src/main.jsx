import { createRoot } from "react-dom/client";
import { store } from "./statemanagement/store.js";
import { Provider } from "react-redux";
import { Toaster } from "./components/ui/toaster.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
