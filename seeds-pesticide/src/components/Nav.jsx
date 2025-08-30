import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2e7d32' }}>
            <div className="container">
                <NavLink className="d-flex align-items-center navbar-brand text-warning fw-bold" to="/">
                    <img src="/FB-Logo.svg" className="img-fluid me-2" alt="FarmBasket Logo" style={{ height: "50px" }} />
                    FarmBasket
                </NavLink>

                <button
                    className="navbar-toggler bg-warning"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/" end>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/products">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn btn-warning text-dark ms-2" to="/login">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
