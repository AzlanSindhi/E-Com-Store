import React from "react";
import { NavLink } from "react-router-dom";

const SupplierNav = () => {
    return (
        <nav className="navbar navbar-expand-lg px-3 shadow"
            style={{
                background: "linear-gradient(90deg, #0d47a1, #1976d2, #42a5f5)"
            }}
        >
            <NavLink to="/supplier/dashboard" className="navbar-brand fw-bold text-white">
                Supplier Panel
            </NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/supplier-module/sup-dashboard" className="nav-link text-white">
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/supplier-module/myproducts" className="nav-link text-white">
                            My Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/supplier-module/orders" className="nav-link text-white">
                            Orders
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/supplier-module/sup-report" className="nav-link text-white">
                            Reports
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SupplierNav;
