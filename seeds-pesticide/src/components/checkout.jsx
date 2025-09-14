import React, { useState, useEffect } from "react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "COD",
  });


  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    setCartItems(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      customer: formData,
      items: cartItems,
      total: totalPrice,
      date: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (res.ok) {
        alert("✅ Order placed successfully!");
        localStorage.removeItem("cart");
        setCartItems([]);

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          payment: "COD",
        });

        // Redirect after order
        window.location.href = "/";
      } else {
        alert("❌ Failed to place order.");
      }
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-success fw-bold mb-4">Checkout</h2>
      <div className="row">
        {/* Left: Customer Info */}
        <div className="col-md-7">
          <div className="card shadow-lg p-4 border-0 mb-4">
            <h5 className="fw-bold text-success mb-3">Customer Information</h5>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Shipping Address
                </label>
                <textarea
                  name="address"
                  className="form-control"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Payment */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Payment Method</label>
                <select
                  name="payment"
                  className="form-select"
                  value={formData.payment}
                  onChange={handleChange}
                >
                  <option value="COD">Cash on Delivery</option>
                  <option value="Card" disabled>
                    Credit/Debit Card (Coming Soon)
                  </option>
                  <option value="UPI" disabled>
                    UPI / Net Banking (Coming Soon)
                  </option>
                </select>
              </div>

              <button type="submit" className="btn btn-success w-100 mt-2">
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="col-md-5">
          <div className="card shadow-lg p-4 border-0">
            <h5 className="fw-bold text-success mb-3">Order Summary</h5>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="d-flex justify-content-between mb-2"
                >
                  <div>
                    {item.product_name} × {item.count}
                  </div>
                  <div>₹{item.price * item.count}</div>
                </div>
              ))
            ) : (
              <p className="text-muted">No items in cart</p>
            )}
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span className="text-success">₹{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
