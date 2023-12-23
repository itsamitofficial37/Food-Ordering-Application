import Logo from "../assets/Logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleToggle = () => {
    setLoggedIn((prevLoggedIn) => !prevLoggedIn);
  };
  const isOnline = useStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Logo} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : {isOnline ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          {isLoggedIn ? (
            <div>
              <button onClick={handleToggle}>Logout</button>
            </div>
          ) : (
            <div>
              <button onClick={handleToggle}>Login</button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
