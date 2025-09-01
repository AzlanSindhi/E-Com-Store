import React from "react";
import { NavLink } from "react-router-dom";

const SupplierDashboard = () => {
    return (
        <div className="container-fluid p-0 min-vh-100"
            style={{
                background: "linear-gradient(135deg, #00c6ff, #0072ff)", // 🌊 Cyan Gradient
                color: "white",
            }}
        >
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark shadow" style={{ background: "rgba(0,0,0,0.3)" }}>
                <NavLink to="/supplier/dashboard" className="navbar-brand fw-bold">
                    Supplier Panel
                </NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><NavLink to="/supplier/dashboard" className="nav-link">Dashboard</NavLink></li>
                        <li className="nav-item"><NavLink to="/supplier/products" className="nav-link">Products</NavLink></li>
                        <li className="nav-item"><NavLink to="/supplier/orders" className="nav-link">Orders</NavLink></li>
                        <li className="nav-item"><NavLink to="/supplier/sales" className="nav-link">Sales</NavLink></li>
                        <li className="nav-item"><NavLink to="/supplier/stock" className="nav-link">Stock</NavLink></li>
                    </ul>
                </div>
            </nav>

            {/* Dashboard Cards */}
            <div className="container py-5">
                <h2 className="fw-bold mb-4 text-center">Welcome, Supplier 👨‍🌾</h2>

                {/* Horizontal row of cards */}
                <div className="d-flex justify-content-center gap-4 flex-wrap">

                    {/* Manage Products */}
                    <div className="card text-dark shadow-lg border-0" style={{ width: "18rem" }}>
                        <div className="card-body text-center">
                            <i className="bi bi-box-seam display-4 text-primary"></i>
                            <h5 className="mt-3">Manage Products</h5>
                            <p className="small text-muted">Add, update, or remove your products.</p>
                            <NavLink to="/supplier/products" className="btn btn-primary btn-sm">
                                Go to Products
                            </NavLink>
                        </div>
                    </div>

                    {/* Orders */}
                    <div className="card text-dark shadow-lg border-0" style={{ width: "18rem" }}>
                        <div className="card-body text-center">
                            <i className="bi bi-cart-check display-4 text-success"></i>
                            <h5 className="mt-3">Orders</h5>
                            <p className="small text-muted">View and manage customer orders.</p>
                            <NavLink to="/supplier/orders" className="btn btn-success btn-sm">
                                View Orders
                            </NavLink>
                        </div>
                    </div>

                    {/* Sales */}
                    <div className="card text-dark shadow-lg border-0" style={{ width: "18rem" }}>
                        <div className="card-body text-center">
                            <i className="bi bi-graph-up display-4 text-warning"></i>
                            <h5 className="mt-3">Sales</h5>
                            <p className="small text-muted">Check your sales summary.</p>
                            <NavLink to="/supplier/sales" className="btn btn-warning btn-sm">
                                View Sales
                            </NavLink>
                        </div>
                    </div>

                    {/* Stock Alerts */}
                    <div className="card text-dark shadow-lg border-0" style={{ width: "18rem" }}>
                        <div className="card-body text-center">
                            <i className="bi bi-exclamation-triangle display-4 text-danger"></i>
                            <h5 className="mt-3">Stock Alerts</h5>
                            <p className="small text-muted">Check products with low stock.</p>
                            <NavLink to="/supplier/stock" className="btn btn-danger btn-sm">
                                Check Stock
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SupplierDashboard;
