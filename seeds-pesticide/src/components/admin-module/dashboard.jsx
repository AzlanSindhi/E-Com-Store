import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="container-fluid p-0 bg-dark text-white min-vh-100">
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
                    </ul>
                </div>
            </nav>

            <div className="container mt-4">
                <h2 className="mb-4">Welcome, Admin</h2>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-4 h-100">
                            <h5>Users</h5>
                            <p className="fs-4 fw-bold">120</p>
                            <NavLink to="/admin-module/cust" className="btn btn-sm btn-outline-light">
                                Manage Customers
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-3">
                            <h5>Products</h5>
                            <p className="fs-4 fw-bold">85</p>
                            <NavLink to="/user-module/products" className="btn btn-sm btn-outline-light">
                                Manage Products
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-3">
                            <h5>Sales</h5>
                            <p className="fs-4 fw-bold">₹45,000</p>
                            <NavLink to="/user-module/sales" className="btn btn-sm btn-outline-light">
                                View Sales
                            </NavLink>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-3">
                            <h5>Reports</h5>
                            <p className="fs-4 fw-bold">12</p>
                            <NavLink to="/user-module/reports" className="btn btn-sm btn-outline-light">
                                View Reports
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
