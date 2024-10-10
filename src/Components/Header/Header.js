import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginName, setLogInName] = useState("Login");
  return (
    <div className="headers">
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg?w=740"
        />
      </div>
      <div className="res-name">
        <h3>Sanjay Food truck</h3>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button
            onClick={() => {
              setLogInName(loginName === "Login" ? "LogOut" : "Login");
            }}
            className="login-btn"
          >
            {loginName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
