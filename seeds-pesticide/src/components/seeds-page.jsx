import React from "react";
import { useNavigate } from "react-router-dom";

const SeedsPage = () => {
    const navigate = useNavigate();

    const seeds = [
        { id: 1, name: "Wheat Seeds", supplier: "AgroSupplies Pvt Ltd", price: "₹500 / 10kg", image: "/assets/products/Seeds/Wheat-Seed.jpg" },
        { id: 2, name: "Rice Seeds", supplier: "GreenHarvest Traders", price: "₹750 / 10kg", image: "https://via.placeholder.com/150x150.png?text=Rice+Seeds" },
        { id: 3, name: "Corn Seeds", supplier: "FarmFresh Co.", price: "₹600 / 8kg", image: "https://via.placeholder.com/150x150.png?text=Corn+Seeds" }
    ];

    return (
        <div className="container py-5 ">
            <h1 className="text-success fw-bold text-center mb-5">Available Seeds</h1>
            <div className="row g-4">
                {seeds.map(seed => (
                    <div key={seed.id} className="col-md-12">
                        <div className="card shadow-sm border-0 d-flex flex-row p-3 align-items-center">
                            <img src={seed.image} alt={seed.name} className="rounded me-4"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                            <div className="flex-grow-1">
                                <h4 className="fw-bold text-dark">{seed.name}</h4>
                                <p className="mb-1 text-muted"><strong>Supplier:</strong> {seed.supplier}</p>
                                <p className="mb-2 text-success fw-semibold"><strong>Price:</strong> {seed.price}</p>
                                <div className="d-flex gap-3">
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => navigate(`/products/seeds/${seed.id}`)}
                                    >
                                        View Product
                                    </button>
                                    <button className="btn btn-success">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeedsPage;
