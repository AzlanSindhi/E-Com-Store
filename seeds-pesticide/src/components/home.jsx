import React from "react";
import heroImage from "../assets/Hero-Test1.jpeg";
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="py-5 bg-light" id="home">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6 text-center text-md-start">
                            <h1 className="display-4 fw-bold text-success">
                                Get Best Farming Products
                            </h1>
                            <p className="lead mb-4 text-muted">
                                🌱 Grow More, Worry Less — <strong>FarmBasket</strong> Delivers
                                Success!
                            </p>
                            {/* ✅ Changed to NavLink */}
                            <NavLink to="/category" className="btn btn-success btn-lg fw-bold">
                                Browse Products 🚜
                            </NavLink>
                        </div>

                        <div className="col-md-6 text-center mt-4 mt-md-0">
                            <img
                                src={heroImage}
                                alt="Farming Hero"
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container my-5">
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-success">🌱 Quality Seeds</h3>
                                <p className="card-text">
                                    Organic and hybrid seeds tested for better yield and growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-success">🛡️ Safe Pesticides</h3>
                                <p className="card-text">
                                    Eco-friendly and effective pest control solutions to protect
                                    crops.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title text-success">🚚 Fast Delivery</h3>
                                <p className="card-text">
                                    Get seeds and pesticides delivered quickly to your doorstep.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center p-5 bg-success text-white shadow-sm">
                <h2 className="fw-bold mb-3">Start Your Farming Journey Today!</h2>
                <p className="lead mb-4">
                    Buy our premium seeds and pesticides to ensure better crop growth and
                    protection.
                </p>
                {/* ✅ Changed to NavLink */}
                <NavLink to="/category" className="btn btn-light btn-lg fw-bold">
                    Shop Now 🌾
                </NavLink>
            </section>
        </div>
    );
};

export default Home;
