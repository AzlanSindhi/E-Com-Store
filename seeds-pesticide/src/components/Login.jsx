import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [cust_name, setName] = useState(""); // ✅ NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cust_name, email, password }), // ✅ send name too
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save user details to localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data.cust_name,
            email: data.email,
          })
        );

        setMessage(`Welcome Back Customer`);

        // ✅ Refresh page to re-render Nav with updated user
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (err) {
      console.error("❌ Error logging in:", err);
      setMessage("Server error");
    }
    navigate("/");
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
