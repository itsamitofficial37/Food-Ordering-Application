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
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <Link to="/">
          <img className="w-36" src={Logo} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {isOnline ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
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
