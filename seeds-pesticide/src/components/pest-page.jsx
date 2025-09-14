import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PestPage = () => {
  const navigate = useNavigate();
  const [pests, setPests] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);

  // ✅ Load cart first
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
    setCartLoaded(true);
  }, []);

  // ✅ Save cart only after loaded
  useEffect(() => {
    if (cartLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, cartLoaded]);

  // ✅ Fetch pests
  useEffect(() => {
    fetch("http://localhost:5000/products/type/Pesticides")
      .then((res) => res.json())
      .then((data) => setPests(data))
      .catch((err) => console.error("Error fetching pesticides:", err));
  }, []);

  const addToCart = (pest) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((c) => c._id === pest._id);
      if (existingItem) {
        return prevCart.map((c) =>
          c._id === pest._id ? { ...c, count: c.count + 1 } : c
        );
      }
      return [...prevCart, { ...pest, count: 1 }];
    });
    alert(`${pest.product_name} added to cart ✅`);
  };

  return (
    <div className="container py-5">
      <h1 className="text-success fw-bold text-center mb-5">Available Pesticides</h1>
      <div className="row g-4">
        {pests.length > 0 ? (
          pests.map((pest) => (
            <div key={pest._id} className="col-md-12">
              <div className="card shadow-sm border-0 d-flex flex-row p-3 align-items-center">
                <img
                  src={pest.image || "https://via.placeholder.com/150x150.png?text=Pesticide"}
                  alt={pest.product_name}
                  className="rounded me-4"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />
                <div className="flex-grow-1">
                  <h4 className="fw-bold text-dark">{pest.product_name}</h4>
                  <p className="mb-1 text-muted"><strong>Supplier:</strong> {pest.supplier_id}</p>
                  <p className="mb-2 text-success fw-semibold"><strong>Price:</strong> ₹{pest.price}</p>
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-outline-success"
                      onClick={() => navigate(`/products/pests/${pest._id}`)}
                    >
                      View Product
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => navigate("/checkout", { state: { product: pest } })}
                    >
                      Buy Now
                    </button>
                    <button
                      className="btn btn-warning text-white"
                      onClick={() => addToCart(pest)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No pesticides available</p>
        )}
      </div>
    </div>
  );
};

export default PestPage;
