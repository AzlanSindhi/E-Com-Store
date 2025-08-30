import React from 'react'
import seedImg from '../assets/products/seeds.jpg';
import pestImg from '../assets/products/pesticide.webp';

const Product = () => {
    const products = [
        {
            id: 1,
            name: "Organic Seeds",
            description: "High-quality organic seeds for healthy crop growth.",
            image: seedImg,
        },
        {
            id: 2,
            name: "Pesticide Spray",
            description: "Effective pest control solution for your crops.",
            image: pestImg
        }
    ]

    return (
        <div className="container my-5">
            <h1 className="text-center text-success mb-4">Our Products</h1>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-6 mb-4">
                        <div className="card shadow-sm h-100">
                            <img src={product.image} className="card-img-top" alt={product.name} style={{ height: "300px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <div className="card-footer text-center">
                                <button className="btn btn-success">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product
