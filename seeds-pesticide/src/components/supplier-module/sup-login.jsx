import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [supplierId, setSupplierId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Fake DB for demo
    const suppliers = [
        { id: "SUP123", password: "12345", approved: true },
        { id: "SUP456", password: "67890", approved: false },
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        const supplier = suppliers.find(
            (s) => s.id === supplierId && s.password === password
        );

        if (!supplier) {
            setError("❌ Invalid Supplier ID or Password");
        } else if (!supplier.approved) {
            setError("Signup request pending admin approval");
        } else {
            setError("");
            navigate("/supplier-module/sup-dashboard");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{ background: "linear-gradient(to right, #f1f8e9, #dcedc8)" }}
        >
            <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center text-success fw-bold mb-3">🌾 Supplier Login</h3>
                {error && <div className="alert alert-danger py-2">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Supplier ID</label>
                        <input
                            type="text"
                            className="form-control"
                            value={supplierId}
                            onChange={(e) => setSupplierId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-2">
                        Login
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-success w-100"
                        onClick={() => navigate("/supplier-module/sup-sign")}
                    >
                        New Supplier? Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
