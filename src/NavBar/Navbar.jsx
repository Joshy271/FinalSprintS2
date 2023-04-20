import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Nav">
      <Link to="/" className="pill">
        Home
      </Link>
      <Link to="/Chores" className="pill2">
        Chores
      </Link>
      <Link to="/Design" className="pill3">
        Design
      </Link>
      <Link to="/Register" className="link-btn"></Link>
    </nav>
  );
}
export default NavBar;
