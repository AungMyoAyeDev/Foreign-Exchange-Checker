import { APP_CONFIG_URL } from "@/app/config";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const bottomBorder = "border-b-2 border-primary";

  return (
    <nav className="flex items-center gap-4 text-preset-3 text-text-primary mt-8 border-b border-border">
      {APP_CONFIG_URL.map((item) => (
        <Link
          to={item.path}
          className={`uppercase  px-4 py-3  hover:text-primary ${pathname === item.path && bottomBorder} `}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
