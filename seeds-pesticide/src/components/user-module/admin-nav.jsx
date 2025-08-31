import React from "react";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 border-bottom">
            <NavLink to="/user-module/dashboard" className="navbar-brand ps-5 fw-bold">
                Admin Panel
            </NavLink>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/user-module/dashboard" className="nav-link">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user-module/cust" className="nav-link">Customers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user-module/products" className="nav-link">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user-module/sales" className="nav-link">Sales</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user-module/reports" className="nav-link">Reports</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user-module/supplier" className="nav-link">Supplier</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminNav;
