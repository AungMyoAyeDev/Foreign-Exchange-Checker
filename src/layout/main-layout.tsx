import { Outlet } from "react-router-dom";
import ThemeToggle from "../components/theme-toggle";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer.tsx/footer";
import Home from "@/features/home";
import LiveMarket from "@/components/live-market/live-market";

const MainLayout = () => {
  return (
    <div className=" bg-background h-screen">
      <header className="fixed top-0 w-full">
        <Navbar />
        <LiveMarket />
      </header>
      <main className="max-w-6xl mx-auto px-8 py-12 min-h-screen mt-14">
        <Home />
        <ThemeToggle />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
