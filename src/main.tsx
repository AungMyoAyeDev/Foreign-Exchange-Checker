import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import { RouterProvider } from "react-router-dom";
import routers from "./app/routes/routers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
    </QueryClientProvider>
  </StrictMode>,
);
