import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/theme-toggle";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-background">
      <h1>hellow</h1>
      <ThemeToggle />
      <Outlet />
    </div>
  );
};

export default MainLayout;
