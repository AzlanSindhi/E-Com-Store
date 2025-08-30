import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#19871bff' }}>
            <div className="container">
                <NavLink className="d-flex align-items-center navbar-brand text-warning fw-bold" to="/">
                    <img src="/FB-Logo.svg" className="img-fluid me-2" alt="FarmBasket Logo" style={{ height: "50px" }} />
                    FarmBasket
                </NavLink>

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
