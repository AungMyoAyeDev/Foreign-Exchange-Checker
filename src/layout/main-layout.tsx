import { Outlet } from "react-router-dom";
import Footer from "../components/footer.tsx/footer";
import Home from "@/features/home";
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";

const MainLayout = () => {
  return (
    <div className=" bg-background h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-8 py-12 mt-26 ">
        <Home />
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
