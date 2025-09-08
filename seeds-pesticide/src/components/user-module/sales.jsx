import React, { useEffect, useState } from "react";
import AdminNav from "./admin-nav";

const Sales = () => {
    const [sales, setSales] = useState([]);

    // fetch sales data
    useEffect(() => {
        fetch("http://localhost:5000/sales")
            .then((res) => res.json())
            .then((data) => setSales(data))
            .catch((err) => console.error("❌ Error fetching sales:", err));
    }, []);

    // delete sale
    const handleRemove = async (id) => {
        try {
            await fetch(`http://localhost:5000/sales/${id}`, { method: "DELETE" });
            setSales(sales.filter((s) => s._id !== id));
        } catch (err) {
            console.error("❌ Error deleting sale:", err);
        }
    };

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
                            {sales.length > 0 ? (
                                sales.map((sale, index) => (
                                    <tr key={sale._id}>
                                        <td>{index + 1}</td>
                                        <td>{sale.Product}</td>
                                        <td>{sale.Category}</td>
                                        <td>{sale.Quantity}</td>
                                        <td>{sale.Amount}</td>
                                        <td>{sale.Date}</td>
                                        <td>{sale.Customer}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleRemove(sale._id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No sales found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sales;
