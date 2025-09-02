import React from "react";
import { NavLink } from "react-router-dom";

const SupplierDashboard = () => {
    return (
        <div className="container-fluid min-vh-100"
            style={{ background: "linear-gradient(to right, #e3f2fd, #bbdefb)" }}
        >
            <div className="container pt-3">
                <h2 className="mb-4 fw-bold text-dark">Welcome, Supplier</h2>
                <div className="row g-4">

                    <div className="col-md-3 col-12">
                        <div className="card text-white shadow text-center p-3 h-100"
                            style={{ background: "linear-gradient(135deg, #1e88e5, #42a5f5)" }}>
                            <h5>My Products</h5>
                            <p className="fs-4 fw-bold">42</p>
                            <NavLink to="/supplier-module/myproducts" className="btn btn-sm btn-light">
                                Manage Products
                            </NavLink>
                        </div>
                    </div>


                    <div className="col-md-3 col-12">
                        <div className="card text-white shadow text-center p-3 h-100"
                            style={{ background: "linear-gradient(135deg, #1e88e5, #42a5f5)" }}>
                            <h5>Pending Orders</h5>
                            <p className="fs-4 fw-bold">18</p>
                            <NavLink to="/supplier-module/orders" className="btn btn-sm btn-light">
                                View Orders
                            </NavLink>
                        </div>
                    </div>

                    {/* Earnings */}
                    <div className="col-md-3 col-12">
                        <div className="card text-white shadow text-center p-3 h-100"
                            style={{ background: "linear-gradient(135deg, #1e88e5, #42a5f5)" }}>
                            <h5>Total Earnings</h5>
                            <p className="fs-4 fw-bold">₹1,25,000</p>
                            <NavLink to="/supplier-module/sup-report" className="btn btn-sm btn-light">
                                View Reports
                            </NavLink>
                        </div>
                    </div>

                    {/* Stock Alerts */}
                    <div className="col-md-3 col-12">
                        <div className="card text-white shadow text-center p-3 h-100"
                            style={{ background: "linear-gradient(135deg, #1e88e5, #42a5f5)" }}>
                            <h5>Low Stock Items</h5>
                            <p className="fs-4 fw-bold">7</p>
                            <NavLink to="/supplier-module/myproducts" className="btn btn-sm btn-light">
                                Restock Now
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h4 className="text-dark">Recent Orders</h4>
                    <table className="table table-hover table-striped shadow">
                        <thead className="table-primary">
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Buyer</th>
                                <th>Quantity</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Pesticide A</td>
                                <td>John Doe</td>
                                <td>5</td>
                                <td><span className="badge bg-warning">Pending</span></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Wheat Seeds</td>
                                <td>Jane Smith</td>
                                <td>10</td>
                                <td><span className="badge bg-success">Shipped</span></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Fertilizer X</td>
                                <td>Rahul Verma</td>
                                <td>3</td>
                                <td><span className="badge bg-danger">Delayed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SupplierDashboard;
