import React from "react";
import { useNavigate } from "react-router-dom";

const PestPage = () => {
    const navigate = useNavigate();

    const pests = [
        { id: 1, name: "Neem Oil", supplier: "BioFarm", price: "₹350 / litre", image: "https://via.placeholder.com/150x150.png?text=Neem+Oil" },
        { id: 2, name: "Organic Spray", supplier: "AgriLife", price: "₹500 / bottle", image: "https://via.placeholder.com/150x150.png?text=Organic+Spray" },
        { id: 3, name: "Fungal Killer", supplier: "AgroChem", price: "₹420 / pack", image: "https://via.placeholder.com/150x150.png?text=Fungal+Killer" }
    ];

    return (
        <div className="container py-5">
            <h1 className="text-success fw-bold text-center mb-5">Available Pesticides</h1>
            <div className="row g-4">
                {pests.map(pest => (
                    <div key={pest.id} className="col-md-12">
                        <div className="card shadow-sm border-0 d-flex flex-row p-3 align-items-center">
                            <img
                                src={pest.image}
                                alt={pest.name}
                                className="rounded me-4"
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            />
                            <div className="flex-grow-1">
                                <h4 className="fw-bold text-dark">{pest.name}</h4>
                                <p className="mb-1 text-muted"><strong>Supplier:</strong> {pest.supplier}</p>
                                <p className="mb-2 text-success fw-semibold"><strong>Price:</strong> {pest.price}</p>
                                <div className="d-flex gap-3">
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => navigate(`/products/pests/${pest.id}`)}
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

export default PestPage;
