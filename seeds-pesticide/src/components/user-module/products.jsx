import React from "react";
import { NavLink } from "react-router-dom";
import AdminNav from "./admin-nav";

const Products = () => {
    const sampleProducts = [
        { id: 1, name: "Wheat Seeds", category: "Seeds", price: 1500, stock: 50, status: "Available", supplierId: "SUP101" },
        { id: 2, name: "Rice Seeds", category: "Seeds", price: 1200, stock: 30, status: "Available", supplierId: "SUP102" },
        { id: 3, name: "Corn Seeds", category: "Seeds", price: 1800, stock: 0, status: "Out of Stock", supplierId: "SUP103" },
        { id: 4, name: "Cotton Seeds", category: "Seeds", price: 2000, stock: 20, status: "Available", supplierId: "SUP104" },

        { id: 5, name: "Herbal Pesticide", category: "Pesticides", price: 900, stock: 40, status: "Available", supplierId: "SUP201" },
        { id: 6, name: "Chemical Pesticide", category: "Pesticides", price: 1500, stock: 25, status: "Available", supplierId: "SUP202" },
        { id: 7, name: "Organic Pest Control", category: "Pesticides", price: 1100, stock: 0, status: "Out of Stock", supplierId: "SUP203" },
        { id: 8, name: "Neem Oil Spray", category: "Pesticides", price: 700, stock: 60, status: "Available", supplierId: "SUP204" },
    ];

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
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Supplier ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sampleProducts.map((product, index) => (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price.toLocaleString()}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <span
                                            className={`badge ${product.status === "Available" ? "bg-success" : "bg-danger"
                                                }`}
                                        >
                                            {product.status}
                                        </span>
                                    </td>
                                    <td>{product.supplierId}</td>
                                    <td>
                                        <NavLink
                                            to={`/user-module/products/${product.id}`}
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

export default Products;
