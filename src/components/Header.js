// Import CSS
import "../components/header.css";
// Import logo
import Logo from "../assets/marvel-logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Logo} alt="Marvel Logo" />
      <nav>
        <ul>
          <NavLink to="*">
            <li>Personnages</li>
          </NavLink>
          <NavLink to="/comics">
            <li>Comics</li>
          </NavLink>
          <li>Favoris</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
