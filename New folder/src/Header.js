import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
  return (
    <ul className="nav justify-content-center sticky-md-top head">
      <li className="nav-item">
        <Link className="nav-link active" to="./">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="./Fac">CARS</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="./Fac/add">ADD TO LIST</Link>
      </li>
  </ul>
  );
}

export default Header;