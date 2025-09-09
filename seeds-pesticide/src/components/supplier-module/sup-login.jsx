// src/pages/supplier-module/SupLogin.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SupLogin = () => {
  const [supId, setSupId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // reset old messages

    try {
      const res = await fetch("http://localhost:5000/supplier-module/sup-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sup_id: supId, password }), // ✅ must match backend
      });

      let data;
      try {
        data = await res.json(); // try parsing JSON
      } catch (err) {
        throw new Error("Server did not return valid JSON");
      }

      if (res.ok) {
        // ✅ Save login info in localStorage
        localStorage.setItem("supplier", JSON.stringify(data));
        setMessage(`Welcome ${data.supplier_name}`);
        navigate("/supplier-module/sup-dashboard"); // redirect after login
      } else {
        setMessage(data.message || "❌ Login failed");
      }
    } catch (err) {
      console.error("❌ Error logging in:", err);
      setMessage("⚠️ Server error. Please check backend logs.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "22rem", borderRadius: "1rem" }}
      >
        <h2 className="text-center mb-2">Supplier Login</h2>
        <p className="text-muted text-center mb-4">
          Enter your Supplier ID and Password
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="supId" className="form-label fw-semibold">
              Supplier ID
            </label>
            <input
              type="text"
              id="supId"
              className="form-control"
              placeholder="Enter Supplier ID"
              value={supId}
              onChange={(e) => setSupId(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
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

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>

        {message && <p className="text-center mt-3 fw-bold">{message}</p>}

        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted">OR</span>
          <hr className="flex-grow-1" />
        </div>

        <p className="text-center text-muted mt-3">
          Don’t have an account?{" "}
          <Link
            to="/supplier-module/sup-sign"
            className="text-decoration-none"
            style={{ color: "#28a745" }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SupLogin;
