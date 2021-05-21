import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { theme } from "./theme";
const queryClient = new QueryClient();
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <GlobalStyles />
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
