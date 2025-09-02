import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-auto">
            <div className="container">
                <p className="mb-2">
                    &copy; {new Date().getFullYear()} <span className="fw-bold">FarmBasket</span>. All rights reserved.
                </p>
                <div className="d-flex justify-content-center gap-4">
                    <NavLink className="text-white text-decoration-none" to="/about">
                        About Us
                    </NavLink>
                    <NavLink className="text-white text-decoration-none" to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
