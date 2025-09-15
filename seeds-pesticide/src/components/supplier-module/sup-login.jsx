import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SupLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMsgType("");

    try {
      const res = await fetch("http://localhost:5000/supplier-module/sup-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save supplier object in localStorage
        localStorage.setItem(
          "supplier",
          JSON.stringify({
            sup_id: data.sup_id,
            supplier_name: data.supplier_name,
            email: data.email,
          })
        );

        setMsgType("success");
        setMessage(`✅ Welcome ${data.supplier_name}`);

        // ✅ Go to dashboard (with refresh)
        setTimeout(() => (window.location.href = "/supplier-module/sup-dashboard"), 1000);
      } else {
        setMsgType("error");
        setMessage(data.message || "❌ Login failed. Check your email & password.");
        setPassword(""); // ✅ clear password for better UX
      }
    } catch (err) {
      console.error("❌ Error logging in:", err);
      setMsgType("error");
      setMessage("⚠️ Server error. Please check backend logs.");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center bg-light" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "22rem", borderRadius: "1rem" }}>
        <h2 className="text-center mb-2">Supplier Login</h2>
        <p className="text-muted text-center mb-4">Enter your Email and Password</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>

        {message && (
          <p className={`text-center mt-3 fw-bold ${msgType === "success" ? "text-success" : "text-danger"}`}>
            {message}
          </p>
        )}

        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted">OR</span>
          <hr className="flex-grow-1" />
        </div>

        <p className="text-center text-muted mt-3">
          Don’t have an account?{" "}
          <Link to="/supplier-module/sup-sign" className="text-decoration-none" style={{ color: "#28a745" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SupLogin;
