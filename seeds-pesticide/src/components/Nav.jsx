import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


import logo from "../../public/FB-Logo.svg";
import rope from "../assets/rope.png";

const Nav = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#19871bff" }}
    >
      <div className="container">
        
        <NavLink
          className="d-flex align-items-center navbar-brand text-warning fw-bold"
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
            <img
              src={rope}
              alt="Rope"
              style={{ width: "30px", height: "30px"}}
            />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/category">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              {user ? (
                <>
                  <span className="nav-link text-white">
                    Welcome, {user.name}
                  </span>
                </>
              ) : (
                <NavLink className="nav-link text-white" to="/login">
                  Login
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              <NavLink to="/supplier-module/sup-login" className="nav-link">
                Become a Supplier
              </NavLink>
            </li>
            <li>
              <button
                className="btn btn-sm btn-danger"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
