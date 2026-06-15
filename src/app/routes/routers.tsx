import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/main-layout";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default routers;
