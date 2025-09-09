import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });

            alert(res.data.message);
        } catch (err) {
            console.error("❌ Signup error:", err);
            alert("Signup failed!");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center py-5 bg-light">
            <div className="card shadow-lg p-4" style={{ width: "24rem", borderRadius: "1rem" }}>
                <h2 className="text-center mb-2">Create Account</h2>
                <p className="text-muted text-center mb-4">Sign up to get started</p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Re-enter your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
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
