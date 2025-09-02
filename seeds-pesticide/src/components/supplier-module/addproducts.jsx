import React, { useState } from "react";

const AddProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        category: "Seeds",
        quantity: "",
        price: "",
        image: "",
        description: "",
        pricePerQuantity: "",
        howToUse: "",
        benefits: "",
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setNewProduct({ ...newProduct, image: files[0] });
        } else {
            setNewProduct({ ...newProduct, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("New Product Submitted:", newProduct);
        alert("Product added successfully!");
        setNewProduct({
            name: "",
            category: "Seeds",
            quantity: "",
            price: "",
            image: "",
            description: "",
            pricePerQuantity: "",
            howToUse: "",
            benefits: "",
        });
    };

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{ background: "linear-gradient(to right, #e8f5e9, #c8e6c9)" }}>

            <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "900px", borderRadius: "20px" }}>
                <h2 className="fw-bold text-success mb-4 text-center">🌱 Add New Product</h2>
                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <select
                            name="category"
                            className="form-select"
                            value={newProduct.category}
                            onChange={handleChange}
                        >
                            <option>Seeds</option>
                            <option>Pesticides</option>
                            <option>Fertilizers</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <input
                            type="number"
                            name="quantity"
                            className="form-control"
                            placeholder="Quantity"
                            value={newProduct.quantity}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            placeholder="Total Price (₹)"
                            value={newProduct.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="pricePerQuantity"
                            className="form-control"
                            placeholder="Price per Quantity (e.g. ₹100/kg)"
                            value={newProduct.pricePerQuantity}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-12">
                        <textarea
                            name="description"
                            className="form-control"
                            rows="2"
                            placeholder="Short Description"
                            value={newProduct.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-12">
                        <textarea
                            name="howToUse"
                            className="form-control"
                            rows="2"
                            placeholder="How to Use"
                            value={newProduct.howToUse}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-12">
                        <textarea
                            name="benefits"
                            className="form-control"
                            rows="2"
                            placeholder="Benefits"
                            value={newProduct.benefits}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="file"
                            name="image"
                            className="form-control"
                            accept="image/*"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <button className="btn btn-success w-100 fw-bold" type="submit">
                            ✅ Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
