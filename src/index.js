import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Settings";
import { QueryClient, QueryClientProvider } from "react-query";
import { ContextProvider } from "./Components";
import { CartProvider } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Provider store={store}>
        <CartProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
        </CartProvider>
      </Provider>
    </ContextProvider>
  </React.StrictMode>
);
