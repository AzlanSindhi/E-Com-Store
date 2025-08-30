import React from "react";

const Signup = () => {
    return (
        <div className="d-flex align-items-center justify-content-center py-5 bg-light">
            <div className="card shadow-lg p-4" style={{ width: "24rem", borderRadius: "1rem" }}>

                <h2 className="text-center mb-2">Create Account</h2>
                <p className="text-muted text-center mb-4">Sign up to get started</p>

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder="Enter your full name"
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

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label fw-semibold">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Re-enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                        style={{ backgroundColor: "#28a745", border: "none" }}
                    >
                        Sign Up
                    </button>
                </form>

                <div className="d-flex align-items-center my-3">
                    <hr className="flex-grow-1" />
                    <span className="mx-2 text-muted">OR</span>
                    <hr className="flex-grow-1" />
                </div>

                <p className="text-center text-muted mt-3">
                    Already have an account?{" "}
                    <a href="/login" className="text-primary fw-semibold text-decoration-none">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
