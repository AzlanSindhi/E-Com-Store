import React, { useState } from "react";

const MyProducts = () => {
    // Sample Data
    const [products, setProducts] = useState([
        { id: 1, name: "Wheat Seeds", category: "Seeds", quantity: 100, price: 500 },
        { id: 2, name: "Pesticide A", category: "Pesticides", quantity: 50, price: 1200 },
        { id: 3, name: "Fertilizer X", category: "Fertilizers", quantity: 30, price: 800 },
    ]);

    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "Seeds",
        quantity: "",
        price: "",
    });

    // Add Product
    const addProduct = () => {
        if (!newProduct.name || !newProduct.quantity || !newProduct.price) return;
        setProducts([
            ...products,
            {
                id: Date.now(),
                ...newProduct,
                quantity: parseInt(newProduct.quantity),
                price: parseFloat(newProduct.price),
            },
        ]);
        setNewProduct({ name: "", category: "Seeds", quantity: "", price: "" });
    };

    // Delete Product
    const deleteProduct = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    // Update Quantity
    const updateQuantity = (id, change) => {
        setProducts(
            products.map((p) =>
                p.id === id ? { ...p, quantity: p.quantity + change } : p
            )
        );
    };

    return (
        <div
            className="container-fluid p-4 min-vh-100"
            style={{ background: "linear-gradient(to right, #f1f8e9, #e8f5e9)" }}
        >
            <h2 className="fw-bold text-dark mb-4">My Products</h2>

            {/* Add Product Form */}
            <div className="card p-3 shadow mb-4">
                <h5 className="mb-3">Add New Product</h5>
                <div className="row g-3">
                    <div className="col-md-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, name: e.target.value })
                            }
                        />
                    </div>
                    <div className="col-md-2">
                        <select
                            className="form-select"
                            value={newProduct.category}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, category: e.target.value })
                            }
                        >
                            <option>Seeds</option>
                            <option>Pesticides</option>
                            <option>Fertilizers</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Quantity"
                            value={newProduct.quantity}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, quantity: e.target.value })
                            }
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Price (₹)"
                            value={newProduct.price}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, price: e.target.value })
                            }
                        />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success w-100" onClick={addProduct}>
                            Add
                        </button>
                    </div>
                </div>
            </div>

            {/* Products Table */}
            <div className="card p-3 shadow">
                <h5 className="mb-3">Product List</h5>
                <table className="table table-hover table-striped align-middle">
                    <thead className="table-success">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Price (₹)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, index) => (
                            <tr key={p.id}>
                                <td>{index + 1}</td>
                                <td>{p.name}</td>
                                <td>{p.category}</td>
                                <td>{p.quantity}</td>
                                <td>₹{p.price}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-primary me-2"
                                        onClick={() => updateQuantity(p.id, 1)}
                                    >
                                        + Add
                                    </button>
                                    <button
                                        className="btn btn-sm btn-warning me-2"
                                        onClick={() => updateQuantity(p.id, -1)}
                                        disabled={p.quantity <= 0}
                                    >
                                        - Reduce
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => deleteProduct(p.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {products.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center text-muted">
                                    No products found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
