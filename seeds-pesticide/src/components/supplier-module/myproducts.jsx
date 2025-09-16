import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const supplier = JSON.parse(localStorage.getItem("supplier"));

  useEffect(() => {
    if (!supplier) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products/supplier/${supplier.sup_id}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("❌ Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [supplier]);

  if (loading) {
    return <p className="text-center mt-5">⏳ Loading products...</p>;
  }

  return (
    <div className="container-fluid p-4 min-vh-100" style={{ background: "linear-gradient(to right, #f1f8e9, #e8f5e9)" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">My Products</h2>
        <Link to="/supplier-module/addproducts" className="btn btn-success">
          + Add Product
        </Link>
      </div>

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
                
                <th>Stock</th>
            </tr>
            </thead>
            <tbody>
            {products.length > 0 ? (
                products.map((p, index) => (
                <tr key={p._id}>
                    <td>{index + 1}</td>
                    <td>{p.product_name}</td>
                    <td>{p.type}</td>
                    <td>{p.quantity}</td>
                    <td>₹{p.price}</td>
                    
                    <td>{p.stocks}</td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan="7" className="text-center text-muted">
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
