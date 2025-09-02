import React, { useState } from "react";

const Orders = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            product: "Wheat Seeds",
            category: "Seeds",
            quantity: 20,
            price: 2000,
            address: "123 Green Street, Mumbai",
            status: "Pending",
        },
        {
            id: 2,
            product: "Pesticide A",
            category: "Pesticides",
            quantity: 5,
            price: 6000,
            address: "45 Market Road, Pune",
            status: "Delivered",
        },
        {
            id: 3,
            product: "Fertilizer X",
            category: "Fertilizers",
            quantity: 10,
            price: 8000,
            address: "78 Farm Lane, Nashik",
            status: "Pending",
        },
    ]);

    // Change Status
    const updateStatus = (id, newStatus) => {
        setOrders(
            orders.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
        );
    };

    return (
        <div
            className="container-fluid p-4 min-vh-100"
            style={{ background: "linear-gradient(to right, #f1f8e9, #dcedc8)" }}
        >
            <h2 className="fw-bold text-success mb-4 text-center">
                🌾 Supplier Orders
            </h2>

            <div className="card shadow p-3 border-0" style={{ borderRadius: "12px" }}>
                <h5 className="mb-3 text-success">📋 Order List</h5>
                <table className="table table-hover align-middle text-center">
                    <thead className="table-success">
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price (₹)</th>
                            <th>Delivery Address</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((o, index) => (
                            <tr key={o.id}>
                                <td>{index + 1}</td>
                                <td className="fw-semibold text-success">{o.product}</td>
                                <td>
                                    <span className="badge bg-light text-success border border-success">
                                        {o.category}
                                    </span>
                                </td>
                                <td>{o.quantity}</td>
                                <td className="fw-bold text-dark">₹{o.price}</td>
                                <td className="text-start">{o.address}</td>
                                <td>
                                    <span
                                        className={`badge px-3 py-2 ${o.status === "Delivered"
                                                ? "bg-success"
                                                : "bg-warning text-dark"
                                            }`}
                                        style={{ borderRadius: "8px" }}
                                    >
                                        {o.status}
                                    </span>
                                </td>
                                <td>
                                    {o.status === "Pending" ? (
                                        <button
                                            className="btn btn-sm btn-success"
                                            onClick={() => updateStatus(o.id, "Delivered")}
                                        >
                                            ✅ Mark Delivered
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-sm btn-secondary"
                                            disabled
                                        >
                                            ✔ Delivered
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        {orders.length === 0 && (
                            <tr>
                                <td colSpan="8" className="text-center text-muted">
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
