import React from "react";
import { NavLink } from "react-router-dom";
import AdminNav from "./admin-nav";

const Dashboard = () => {
    return (
        <div className="container-fluid bg-dark text-white min-vh-100">

            <AdminNav />

            <div className="container mt-4 md-2">
                <h2 className="mb-4">Welcome Admin</h2>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-4 h-100">
                            <h5>Users</h5>
                            <p className="fs-4 fw-bold">120</p>
                            <NavLink to="/user-module/cust" className="btn btn-sm btn-outline-light">
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
                            <h5>Supplier</h5>
                            <p className="fs-4 fw-bold">6</p>
                            <NavLink to="/user-module/supplier" className="btn btn-sm btn-outline-light">
                                View Suppliers
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-3">
                            <h5>Reports</h5>
                            <p className="fs-4 fw-bold">9</p>
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
