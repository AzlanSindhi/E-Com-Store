import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNav from "./admin-nav";

const Reports = () => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September"
    ];
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [report, setReport] = useState({
        totalSalesAmount: 0,
        totalOrders: 0,
        productsSummary: [],
        topProducts: []
    });

    useEffect(() => {
        fetch(`http://localhost:5000/reports/${selectedMonth}`)
            .then(res => res.json())
            .then(data => setReport(data))
            .catch(err => console.error("Error fetching report:", err));
    }, [selectedMonth]);

    return (
        <div className="container-fluid bg-dark text-white min-vh-100 py-4">
            <AdminNav />
            <div className="container">
                <h2 className="mb-4 pt-2">Reports</h2>

                <div className="mb-4">
                    <label className="me-2 fw-bold">Select Month:</label>
                    <select
                        className="form-select bg-secondary text-white w-auto d-inline"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month} 2025
                            </option>
                        ))}
                    </select>
                </div>

                <div className="row g-4 mb-4">
                    <div className="col-md-6">
                        <div className="card bg-secondary text-white text-center p-3">
                            <h5>Total Sales Amount</h5>
                            <p className="fs-4 fw-bold">₹{report.totalSalesAmount.toLocaleString()}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-secondary text-white text-center p-3">
                            <h5>Total Orders</h5>
                            <p className="fs-4 fw-bold">{report.totalOrders}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="mb-3">Products by Category</h4>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Number of Products Sold</th>
                            </tr>
                        </thead>
                        <tbody>
                            {report.productsSummary.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.category}</td>
                                    <td>{item.count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mb-4">
                    <h4 className="mb-3">Top Products</h4>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Sales Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {report.topProducts.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>₹{product.sales.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reports;
