import React from "react";
import { useNavigate } from "react-router-dom";
import seedImg from "../assets/products/seeds.jpg";
import pestImg from "../assets/products/pesticide.webp";

const Category = () => {
    const navigate = useNavigate();

    const categories = [
        {
            id: 1,
            name: "Seeds",
            description: "Explore high-quality seeds for all types of crops.",
            image: seedImg,
            link: "/seeds",
        },
        {
            id: 2,
            name: "Pesticides",
            description: "Protect your crops with safe and effective pesticides.",
            image: pestImg,
            link: "/pest-page",
        },
    ];

    return (
        <div className="container my-5">
            <h1 className="text-center text-success mb-4">Product Categories</h1>
            <div className="row">
                {categories.map((cat) => (
                    <div key={cat.id} className="col-md-6 mb-4">
                        <div
                            className="card shadow-sm h-100 cursor-pointer"
                            onClick={() => navigate(cat.link)}
                            style={{ cursor: "pointer" }}
                        >
                            <img
                                src={cat.image}
                                className="card-img-top"
                                alt={cat.name}
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">{cat.name}</h5>
                                <p className="card-text text-muted">{cat.description}</p>
                            </div>
                            <div className="card-footer text-center">
                                <button
                                    className="btn btn-success"
                                    onClick={() => navigate(cat.link)}
                                >
                                    View {cat.name}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
