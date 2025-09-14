import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../public/FB-Logo.svg";
import rope from "../assets/rope.png";

const Nav = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Load user from localStorage on page load
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // ✅ Clear user data
    setUser(null); // ✅ Update state
    navigate("/login"); // ✅ Redirect to login
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#19871bff" }}
    >
      <div className="container">
        {/* Logo + Brand */}
        <NavLink
          className="d-flex justify-content-between align-items-center navbar-brand text-warning fw-bold"
          to="/"
        >
          <img
            src={logo}
            className="img-fluid me-2"
            alt="FarmBasket Logo"
            style={{ height: "50px" }}
          />
          FarmBasket
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img src={rope} alt="Rope" style={{ width: "30px", height: "30px" }} />
          </span>
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/" end>
                Home
              </NavLink>
            </li>

            {/* Products */}
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/category">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/cart">
                See Cart
              </NavLink>
            </li>

            {/* Login OR Welcome Message */}
            <li className="nav-item">
              {user ? (
                <span className="nav-link text-white">
                  👋 Welcome Back Customer
                </span>
              ) : (
                <NavLink className="nav-link text-white" to="/login">
                  Login
                </NavLink>
              )}
            </li>

            {/* Supplier */}
            <li className="nav-item">
              <NavLink to="/supplier-module/sup-login" className="nav-link text-white">
                Become a Supplier
              </NavLink>
            </li>

            {/* Logout Button (Only when logged in) */}
            {user && (
              <li className="nav-item">
                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
