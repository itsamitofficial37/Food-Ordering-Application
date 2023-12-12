import Logo from "../assets/Logo.jpg";
import { useState } from "react";
const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleToggle = () => {
    setLoggedIn((prevLoggedIn) => !prevLoggedIn);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>

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
