import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SeedsPage = () => {
    const navigate = useNavigate();
    const [seeds, setSeeds] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products/type/Seeds")
            .then(res => res.json())
            .then(data => {
                console.log("Fetched seeds:", data); // 🔍 debug
                setSeeds(data);
            })
            .catch(err => console.error("Error fetching seeds:", err));
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-success fw-bold text-center mb-5">Available Seeds</h1>
            <div className="row g-4">
                {seeds.length > 0 ? (
                    seeds.map(seed => (
                        <div key={seed._id} className="col-md-12">
                            <div className="card shadow-sm border-0 d-flex flex-row p-3 align-items-center">
                                <img
                                    src={seed.image || "https://via.placeholder.com/150x150.png?text=Seed"}
                                    alt={seed.product_name}
                                    className="rounded me-4"
                                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                />
                                <div className="flex-grow-1">
                                    <h4 className="fw-bold text-dark">{seed.product_name}</h4>
                                    <p className="mb-1 text-muted">
                                        <strong>Supplier:</strong> {seed.supplier_id}
                                    </p>
                                    <p className="mb-2 text-success fw-semibold">
                                        <strong>Price:</strong> ₹{seed.price}
                                    </p>
                                    <div className="d-flex gap-3">
                                        <button
                                            className="btn btn-outline-success"
                                            onClick={() => navigate(`/products/seeds/${seed._id}`)}
                                        >
                                            View Product
                                        </button>
                                        <button className="btn btn-success">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted">No seeds available</p>
                )}
            </div>
        </div>
    );
};

export default SeedsPage;
