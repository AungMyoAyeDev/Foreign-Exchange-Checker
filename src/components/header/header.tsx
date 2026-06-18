import { Link } from "react-router-dom";
import LiveMarket from "./coponents/live-market";
import logo from "@/assets/images/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 w-full">
      <div className=" w-full px-6 py-5 flex items-center justify-between bg-background">
        <Link to={"/"}>
          <img src={logo} alt="FX checker logo " />
        </Link>
        <div className="uppercase space-x-2 text-text-secondary text-preset-4">
          <span>55</span>
          <span>CURRENCIES</span>
          <span>·</span>
          <span>EOD</span>
          <span>·</span>
          <span>ECB</span>
          <span>DATA</span>
        </div>
      </div>
      <LiveMarket />
    </header>
  );
};

export default Header;
