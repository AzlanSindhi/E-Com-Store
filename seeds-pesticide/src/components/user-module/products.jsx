import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNav from "./admin-nav";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("❌ Fetch error:", err));
    }, []);

    return (
        <div className="bg-dark text-white min-vh-100">
            <AdminNav />
            <div className="container py-4">
                <h2 className="mb-4">Products Management</h2>

                <div className="table-responsive">
                    <table className="table table-dark table-striped table-hover align-middle">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price (₹)</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Supplier ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={product._id}>
                                    <td>{index + 1}</td>
                                    <td>{product.product_name}</td>
                                    <td>{product.type}</td>
                                    <td>{product.price?.toLocaleString()}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <span
                                            className={`badge ${product.status === "In Stock"
                                                ? "bg-success"
                                                : "bg-danger"
                                                }`}
                                        >
                                            {product.status}
                                        </span>
                                    </td>
                                    <td>{product.supplier_id}</td>
                                    <td>
                                        <NavLink
                                            to={`/user-module/products/${product._id}`}
                                            className="btn btn-sm btn-outline-info me-2"
                                        >
                                            View
                                        </NavLink>
                                        <button className="btn btn-sm btn-outline-warning me-2">
                                            Edit
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">
                                            Delete
                                        </button>
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

export default Products;
