import React, { useState } from "react";

const Reports = () => {
    const [reportData] = useState({
        totalSales: 16000,
        totalOrders: 3,
        categories: [
            { name: "Seeds", count: 1 },
            { name: "Pesticides", count: 1 },
            { name: "Fertilizers", count: 1 },
        ],
        topProducts: [
            { name: "Wheat Seeds", sales: 2000 },
            { name: "Pesticide A", sales: 6000 },
            { name: "Fertilizer X", sales: 8000 },
        ],
    });

    return (
        <div
            className="container-fluid p-4 min-vh-100"
            style={{ background: "linear-gradient(to right, #f1f8e9, #dcedc8)" }}
        >
            <h2 className="fw-bold text-success mb-4 text-center">
                🌾 Farm Reports & Analytics 📊
            </h2>

            {/* Summary Cards */}
            <div className="row mb-4">
                <div className="col-md-4">
                    <div className="card shadow border-0 text-center p-3 bg-light">
                        <h5 className="text-success">💰 Total Sales</h5>
                        <h3 className="fw-bold text-dark">₹{reportData.totalSales}</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow border-0 text-center p-3 bg-light">
                        <h5 className="text-success">📦 Total Orders</h5>
                        <h3 className="fw-bold text-dark">{reportData.totalOrders}</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow border-0 text-center p-3 bg-light">
                        <h5 className="text-success">🌱 Active Categories</h5>
                        <h3 className="fw-bold text-dark">{reportData.categories.length}</h3>
                    </div>
                </div>
            </div>

            {/* Category Report */}
            <div className="card shadow border-0 p-3 mb-4">
                <h5 className="text-success mb-3">🌿 Sales by Category</h5>
                <table className="table table-bordered table-hover align-middle text-center">
                    <thead className="table-success">
                        <tr>
                            <th>Category</th>
                            <th>Orders Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.categories.map((c, index) => (
                            <tr key={index}>
                                <td className="fw-semibold">{c.name}</td>
                                <td>{c.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Top Products Report */}
            <div className="card shadow border-0 p-3">
                <h5 className="text-success mb-3">🌾 Top Products</h5>
                <table className="table table-striped table-hover align-middle text-center">
                    <thead className="table-success">
                        <tr>
                            <th>Product</th>
                            <th>Sales (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.topProducts.map((p, index) => (
                            <tr key={index}>
                                <td className="fw-semibold">{p.name}</td>
                                <td className="fw-bold">₹{p.sales}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;
