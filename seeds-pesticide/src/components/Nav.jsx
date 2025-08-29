import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2e7d32' }}>
            {/* Dark green background */}
            <div className="container">
                <Link className="navbar-brand text-warning fw-bold" to="/">
                    🌾 FarmBasket
                </Link>
                <button
                    className="navbar-toggler text-light"
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
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="btn btn-warning text-dark ms-2"
                                to="/login"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
