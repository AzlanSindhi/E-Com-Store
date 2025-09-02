import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [supplierName, setSupplierName] = useState("");
    const [firmName, setFirmName] = useState("");
    const [productType, setProductType] = useState("Seeds");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div
                className="d-flex justify-content-center align-items-center min-vh-100"
                style={{ background: "linear-gradient(to right, #f1f8e9, #dcedc8)" }}
            >
                <div className="card shadow p-4 text-center" style={{ maxWidth: "400px" }}>
                    <h4 className="text-success fw-bold mb-3">✅ Signup Request Sent</h4>
                    <p className="text-muted">
                        Your details have been submitted. Please wait for admin approval
                        before logging in.
                    </p>
                    <button className="btn btn-success mt-3" onClick={() => navigate("/home")}>
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{ background: "linear-gradient(to right, #f1f8e9, #dcedc8)" }}
        >
            <div className="card shadow p-4" style={{ maxWidth: "450px", width: "100%" }}>
                <h3 className="text-center text-success fw-bold mb-3">🌱 Supplier Signup</h3>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Supplier Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={supplierName}
                            onChange={(e) => setSupplierName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Firm Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={firmName}
                            onChange={(e) => setFirmName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Product Type</label>
                        <select
                            className="form-select"
                            value={productType}
                            onChange={(e) => setProductType(e.target.value)}
                        >
                            <option value="Seeds">Seeds</option>
                            <option value="Pesticides">Pesticides</option>
                            <option value="Both">Both</option>
                        </select>
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
                    <button type="submit" className="btn btn-success w-100">
                        Submit for Approval
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
