import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import { RouterProvider } from "react-router-dom";
import routers from "./app/routes/routers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
);
