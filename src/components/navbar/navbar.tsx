import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="space-x-4">
        <Link to="/">home</Link>

        <Link to="/compare">compare</Link>
        <Link to="/log">log</Link>
        <Link to="/favorites">FAV</Link>
      </nav>
    </header>
  );
};

export default Navbar;
