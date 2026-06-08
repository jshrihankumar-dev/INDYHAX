import { Link, NavLink } from "../router";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <Logo />
          <span>Before They Were Gone</span>
        </Link>
        <div className="navbar-links">
          <NavLink to="/create" className="navbar-link">Create</NavLink>
          <NavLink to="/how-it-works" className="navbar-link">How it works</NavLink>
          <NavLink to="/stories" className="navbar-link">Stories</NavLink>
          <NavLink to="/tips" className="navbar-link">Tips</NavLink>
          <NavLink to="/about" className="navbar-link">About</NavLink>
          <Link to="/saved" className="btn btn-soft btn-sm">
            Drafts
          </Link>
        </div>
      </div>
    </nav>
  );
}
