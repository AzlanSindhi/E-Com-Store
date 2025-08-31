import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNav from "./admin-nav";


const Reports = () => {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September"
    ];
    const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);

    const monthlyReports = {
        January: {
            sales: "₹10,000",
            orders: 25,
            productsSummary: [
                { category: "Seeds", count: 10 },
                { category: "Pesticides", count: 5 }
            ],
            topProducts: [
                { name: "Wheat Seeds", sales: "₹5,000" },
                { name: "Neem Pesticide", sales: "₹3,000" }
            ]
        },
        February: {
            sales: "₹12,500",
            orders: 30,
            productsSummary: [
                { category: "Seeds", count: 12 },
                { category: "Pesticides", count: 6 }
            ],
            topProducts: [
                { name: "Organic Fertilizer", sales: "₹7,000" },
                { name: "Wheat Seeds", sales: "₹4,500" }
            ]
        },
        March: {
            sales: "₹18,000",
            orders: 45,
            productsSummary: [
                { category: "Seeds", count: 15 },
                { category: "Pesticides", count: 8 }
            ],
            topProducts: [
                { name: "Neem Pesticide", sales: "₹8,500" },
                { name: "Corn Seeds", sales: "₹6,000" }
            ]
        },
        April: {
            sales: "₹20,000",
            orders: 50,
            productsSummary: [
                { category: "Seeds", count: 20 },
                { category: "Pesticides", count: 10 }
            ],
            topProducts: [
                { name: "Rice Seeds", sales: "₹9,000" },
                { name: "Organic Fertilizer", sales: "₹7,500" }
            ]
        },
        May: {
            sales: "₹22,000",
            orders: 55,
            productsSummary: [
                { category: "Seeds", count: 22 },
                { category: "Pesticides", count: 12 }
            ],
            topProducts: [
                { name: "Hybrid Maize Seeds", sales: "₹10,000" },
                { name: "Neem Pesticide", sales: "₹7,000" }
            ]
        },
        June: {
            sales: "₹19,500",
            orders: 48,
            productsSummary: [
                { category: "Seeds", count: 18 },
                { category: "Pesticides", count: 10 }
            ],
            topProducts: [
                { name: "Wheat Seeds", sales: "₹8,000" },
                { name: "Organic Fertilizer", sales: "₹6,500" }
            ]
        },
        July: {
            sales: "₹25,000",
            orders: 60,
            productsSummary: [
                { category: "Seeds", count: 25 },
                { category: "Pesticides", count: 12 }
            ],
            topProducts: [
                { name: "Rice Seeds", sales: "₹11,000" },
                { name: "Neem Pesticide", sales: "₹8,500" }
            ]
        },
        August: {
            sales: "₹28,000",
            orders: 70,
            productsSummary: [
                { category: "Seeds", count: 28 },
                { category: "Pesticides", count: 14 }
            ],
            topProducts: [
                { name: "Corn Seeds", sales: "₹12,000" },
                { name: "Organic Fertilizer", sales: "₹9,000" }
            ]
        },
        September: {
            sales: "₹24,000",
            orders: 58,
            productsSummary: [
                { category: "Seeds", count: 23 },
                { category: "Pesticides", count: 12 }
            ],
            topProducts: [
                { name: "Wheat Seeds", sales: "₹10,500" },
                { name: "Hybrid Maize Seeds", sales: "₹8,000" }
            ]
        }

    };

    const report = monthlyReports[selectedMonth];

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

                {/* Sales Summary */}
                <div className="row g-4 mb-4">
                    <div className="col-md-6">
                        <div className="card bg-secondary text-white text-center p-3">
                            <h5>Total Sales</h5>
                            <p className="fs-4 fw-bold">{report.sales}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-secondary text-white text-center p-3">
                            <h5>Total Orders</h5>
                            <p className="fs-4 fw-bold">{report.orders}</p>
                        </div>
                    </div>
                </div>

                {/* Products Category Summary */}
                <div className="mb-4">
                    <h4 className="mb-3">Products by Category</h4>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Number of Products</th>
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

                {/* Top Products */}
                <div className="mb-4">
                    <h4 className="mb-3">Top Products</h4>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            {report.topProducts.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.name}</td>
                                    <td>{product.sales}</td>
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
