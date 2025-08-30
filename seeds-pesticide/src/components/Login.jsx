import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="d-flex align-items-center justify-content-center py-5 bg-light">
            <div className="card shadow-lg p-4" style={{ width: "22rem", borderRadius: "1rem" }}>

                <h2 className="text-center mb-2">Welcome Back</h2>
                <p className="text-muted text-center mb-4">Login to access your account</p>

                <form>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            placeholder="Enter your email"
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
                            required
                        />
                    </div>


                    <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#28a745", border: "none" }}>
                        Login
                    </button>
                </form>

                <div className="d-flex align-items-center my-3">
                    <hr className="flex-grow-1" />
                    <span className="mx-2 text-muted">OR</span>
                    <hr className="flex-grow-1" />
                </div>

                <p className="text-center text-muted mt-3">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-decoration-none" style={{ color: "#28a745" }}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
