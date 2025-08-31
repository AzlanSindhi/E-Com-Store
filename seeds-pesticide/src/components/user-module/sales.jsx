import React from "react";
import { NavLink } from "react-router-dom";
import AdminNav from "./admin-nav";

const Sales = () => {
    const sampleSales = [
        { id: 1, product: "Wheat Seeds", category: "Seeds", quantity: 10, amount: 15000, date: "2025-08-01", customer: "John Doe" },
        { id: 2, product: "Rice Seeds", category: "Seeds", quantity: 5, amount: 6000, date: "2025-08-03", customer: "Jane Smith" },
        { id: 3, product: "Neem Oil Spray", category: "Pesticides", quantity: 12, amount: 8400, date: "2025-08-05", customer: "David Miller" },
        { id: 4, product: "Chemical Pesticide", category: "Pesticides", quantity: 3, amount: 4500, date: "2025-08-07", customer: "Emily Johnson" },
        { id: 5, product: "Corn Seeds", category: "Seeds", quantity: 8, amount: 14400, date: "2025-08-10", customer: "Michael Brown" },
    ];

    return (
        <div className="bg-dark text-white min-vh-100">
            <AdminNav />
            <div className="container py-4">
                <h2 className="mb-4">Sales Management</h2>

                <div className="table-responsive">
                    <table className="table table-dark table-striped table-hover align-middle">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Total Amount (₹)</th>
                                <th>Date</th>
                                <th>Customer</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sampleSales.map((sale, index) => (
                                <tr key={sale.id}>
                                    <td>{index + 1}</td>
                                    <td>{sale.product}</td>
                                    <td>{sale.category}</td>
                                    <td>{sale.quantity}</td>
                                    <td>{sale.amount.toLocaleString()}</td>
                                    <td>{sale.date}</td>
                                    <td>{sale.customer}</td>
                                    <td>
                                        <NavLink
                                            to={`/user-module/sales/${sale.id}`}
                                            className="btn btn-sm btn-outline-info me-2"
                                        >
                                            View
                                        </NavLink>
                                        <button className="btn btn-sm btn-outline-warning me-2">Edit</button>
                                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sales;
