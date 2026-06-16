import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav className=" w-full px-6 py-5 flex items-center justify-between">
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
    </nav>
  );
};

export default Navbar;
