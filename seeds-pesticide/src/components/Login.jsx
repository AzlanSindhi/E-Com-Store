import React, { useState } from "react";
import { href, Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // clear previous message

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // ✅ only email + password
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save cust_name + email in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            cust_name: data.cust_name, // ✅ save cust_name
            email: data.email,
          })
        );

        setMessage(`✅ Welcome back, ${data.cust_name}!`);
        setTimeout(()=> window.location.reload(false), 1000);
        setTimeout(() => (window.location.href = "/"), 1000);
      } else {
        setMessage(data.message || "❌ Login failed. Try again.");
      }
    } catch (err) {
      console.error("❌ Error logging in:", err);
      setMessage("⚠️ Server error. Please try later.");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "22rem", borderRadius: "1rem" }}
      >
        <h2 className="text-center mb-2">Welcome Back</h2>
        <p className="text-muted text-center mb-4">
          Login to access your account
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
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

          {/* Password */}
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

          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ backgroundColor: "#28a745", border: "none" }}
          >
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
            to="/signup"
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

export default Login;
