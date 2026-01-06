import { NavLink } from "react-router-dom";
import logo from "../assets/canvasx-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="CanvasX" />
        <span>CanvasX</span>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
