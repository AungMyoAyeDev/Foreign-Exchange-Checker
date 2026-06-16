import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/theme-toggle";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer.tsx/footer";

const MainLayout = () => {
  return (
    <div className=" bg-background h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto p-8 min-h-screen">
        <ThemeToggle />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
