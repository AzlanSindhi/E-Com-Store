import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Sample Data (later from MongoDB)
const products = {
    seeds: [
        {
            id: 1,
            name: "Wheat Seeds",
            supplier: "AgroSupplies Pvt Ltd",
            price: 500,
            quantity: "10kg",
            image: "/assets/products/Seeds/Wheat-Seed.jpg",
            description: "High-quality wheat seeds for better yield.",
            howToUse: "Sow during Rabi season with proper irrigation.",
            benefits: [
                "Improves crop yield",
                "Certified supplier",
                "Affordable pricing"
            ]
        }
    ],
    pests: [
        {
            id: 1,
            name: "Neem Oil",
            supplier: "BioFarm",
            price: 350,
            quantity: "1 litre",
            image: "https://via.placeholder.com/150x150.png?text=Neem+Oil",
            description: "Natural pesticide made from neem extracts.",
            howToUse: "Mix with water and spray on crops every 15 days.",
            benefits: [
                "Eco-friendly solution",
                "Safe for crops",
                "Repels multiple pests"
            ]
        }
    ]
};

// Dummy feedback (later from Feedback Table in DB)
const feedbacks = {
    1: [
        { user: "Farmer A", comment: "Great quality product!", rating: 5 },
        { user: "Farmer B", comment: "Helped improve yield.", rating: 4 }
    ]
};

const ProductPage = () => {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const product = products[category]?.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2 className="text-center text-danger my-5">Product Not Found</h2>;
    }

    // Handlers for buttons
    const handleAddToCart = () => {
        // later: add product to cart state/context
        navigate("/cart");
    };

    const handleBuyNow = () => {
        // later: pass product details to checkout page
        navigate("/checkout", { state: { product } });
    };

    return (
        <div className="container py-5" style={{ minHeight: "100vh" }}>
            <div className="card shadow-lg p-4 border-0">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <img src={product.image} alt={product.name} className="img-fluid rounded" />
                    </div>
                    <div className="col-md-7">
                        <h2 className="text-success fw-bold">{product.name}</h2>
                        <p><strong>Supplier:</strong> {product.supplier}</p>
                        <p className="text-success fw-semibold">
                            <strong>Price:</strong> ₹{product.price} / {product.quantity}
                        </p>
                        <p className="text-muted">{product.description}</p>
                        <button className="btn btn-success me-3" onClick={handleBuyNow}>Buy Now</button>
                        <button className="btn btn-outline-success" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>

                {/* How to Use */}
                <hr />
                <h4 className="text-success fw-bold">How to Use</h4>
                <p className="text-muted">{product.howToUse}</p>

                {/* Benefits */}
                <h4 className="text-success fw-bold mt-4">Benefits</h4>
                <ul className="text-muted">
                    {product.benefits.map((b, idx) => <li key={idx}>{b}</li>)}
                </ul>

                {/* Customer Reviews */}
                <h4 className="text-success fw-bold mt-4">Customer Reviews</h4>
                {feedbacks[product.id] ? (
                    feedbacks[product.id].map((rev, idx) => (
                        <p key={idx} className="text-muted fst-italic">
                            ⭐ {rev.rating}/5 – "{rev.comment}" – {rev.user}
                        </p>
                    ))
                ) : (
                    <p className="text-muted">No reviews yet.</p>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
