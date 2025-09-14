import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Fetch product by ID
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  // ✅ Add product to cart
  const handleAddToCart = () => {
    if (!product) return;
    const existingItem = cart.find((c) => c._id === product._id);
    if (existingItem) {
      setCart(
        cart.map((c) =>
          c._id === product._id ? { ...c, count: c.count + 1 } : c
        )
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
    alert(`${product.product_name} added to cart ✅`);
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } });
  };

  if (loading) return <h3 className="text-center text-muted my-5">Loading product...</h3>;
  if (!product) return <h2 className="text-center text-danger my-5">Product Not Found</h2>;

  return (
    <div className="container py-5" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4 border-0">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img
              src={product.image || "https://via.placeholder.com/300x300.png?text=Product"}
              alt={product.product_name}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-7">
            <h2 className="text-success fw-bold">{product.product_name}</h2>
            <p><strong>Supplier:</strong> {product.supplier_id}</p>
            <p className="text-success fw-semibold">
              <strong>Price:</strong> ₹{product.price} / {product.quantity}
            </p>
            <p className="text-muted">{product.description || "No description available."}</p>
            <button className="btn btn-success me-3" onClick={handleBuyNow}>Buy Now</button>
            <button className="btn btn-outline-success" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>

        {/* How to Use */}
        {product.how_to_use && (
          <>
            <hr />
            <h4 className="text-success fw-bold">How to Use</h4>
            <p className="text-muted">{product.how_to_use}</p>
          </>
        )}

        {/* Benefits */}
        {product.benefits?.length > 0 && (
          <>
            <h4 className="text-success fw-bold mt-4">Benefits</h4>
            <ul className="text-muted">
              {product.benefits.map((b, idx) => <li key={idx}>{b}</li>)}
            </ul>
          </>
        )}

        {/* Customer Reviews */}
        <h4 className="text-success fw-bold mt-4">Customer Reviews</h4>
        <p className="text-muted">Reviews feature coming soon...</p>
      </div>
    </div>
  );
};

export default ProductPage;
