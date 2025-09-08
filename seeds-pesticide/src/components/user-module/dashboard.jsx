import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNav from "./admin-nav";

const Dashboard = () => {
    const [stats, setStats] = useState({
        customers: 0,
        suppliers: 0,
        products: 0,
        sales: 0,
        reports: 0,
        totalSalesAmount: 0
    });

    useEffect(() => {
        fetch("http://localhost:5000/dashboard-stats")
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error("Error fetching stats:", err));
    }, []);

    return (
        <div className="container-fluid bg-dark text-white min-vh-100">
            <AdminNav />
            <div className="container mt-4 md-2">
                <h2 className="mb-4">Welcome Admin</h2>
                <div className="row g-4 pd-3">

                    {/* Customers */}
                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-4 h-100">
                            <h5>Customers</h5>
                            <p className="fs-4 fw-bold">{stats.customers}</p>
                            <NavLink to="/user-module/cust" className="btn btn-sm btn-outline-light">
                                Manage Customers
                            </NavLink>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-3">
                            <h5>Products</h5>
                            <p className="fs-4 fw-bold">{stats.products}</p>
                            <NavLink to="/user-module/products" className="btn btn-sm btn-outline-light">
                                Manage Products
                            </NavLink>
                        </div>
                    </div>

                    {/* Sales */}
                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-3">
                            <h5>Sales</h5>
                            <p className="fs-4 fw-bold">{stats.sales}</p>
                            <p className="fs-5 fw-bold">Total: ₹{stats.totalSalesAmount}</p>
                            <NavLink to="/user-module/sales" className="btn btn-sm btn-outline-light">
                                View Sales
                            </NavLink>
                        </div>
                    </div>

                    {/* Suppliers */}
                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-3">
                            <h5>Suppliers</h5>
                            <p className="fs-4 fw-bold">{stats.suppliers}</p>
                            <NavLink to="/user-module/supplier" className="btn btn-sm btn-outline-light">
                                View Suppliers
                            </NavLink>
                        </div>
                    </div>

                    {/* Reports */}
                    <div className="col-12">
                        <div className="card bg-secondary text-white shadow text-center p-3">
                            <h5>Reports</h5>
                            <p className="fs-4 fw-bold">{stats.reports}</p>
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
