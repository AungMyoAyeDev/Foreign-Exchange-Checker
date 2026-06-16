import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layout/main-layout";
import {
  ComparePage,
  FavoritesPage,
  HistoryPage,
  LogPage,
} from "../common/lazy-load";
import NotFound from "@/components/notfoud";
import ErrorPage from "@/components/error";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HistoryPage />,
      },
      {
        path: "compare",
        element: <ComparePage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "log",
        element: <LogPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routers;
