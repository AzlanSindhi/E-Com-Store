import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("Seeds");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/supplier-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, email, address, category, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Signup failed");
        return;
      }

      setSubmitted(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      console.error("❌ Signup error:", err);
      alert("Error connecting to server");
    }
  };

  if (submitted) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100"
        style={{ background: "linear-gradient(to right, #f1f8e9, #dcedc8)" }}>
        <div className="card shadow p-4 text-center" style={{ maxWidth: "400px" }}>
          <h4 className="text-success fw-bold mb-3">✅ Signup Successful</h4>
          <p className="text-muted">
            Your account has been created. Redirecting to login...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ background: "linear-gradient(to right, #f1f8e9, #dcedc8)" }}>
      <div className="card shadow p-4" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center text-success fw-bold mb-3">🌱 Supplier Signup</h3>
        <form onSubmit={handleSignup}>

          <div className="mb-3">
            <label className="form-label fw-semibold">Supplier Name</label>
            <input type="text" className="form-control"
              value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Contact Number</label>
            <input type="tel" className="form-control" maxLength="10"
              value={contact} onChange={(e) => setContact(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control"
              value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Address</label>
            <input type="text" className="form-control"
              value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Category</label>
            <select className="form-select"
              value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Seeds">Seeds</option>
              <option value="Pesticides">Pesticides</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control"
              value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
