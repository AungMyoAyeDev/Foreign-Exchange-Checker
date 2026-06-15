import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/theme-toggle";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto h-screen bg-background">
      <h1 className="  text-preset-1 text-text ">hellow</h1>
      <div className="w-20 h-12 bg-neutral-900 rounded-4"></div>
      <ThemeToggle />
      <Outlet />
    </div>
  );
};

export default MainLayout;
