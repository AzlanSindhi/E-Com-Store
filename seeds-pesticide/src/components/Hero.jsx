import React from 'react'
import heroImage from '../assets/Hero-Test1.jpeg'



const Hero = () => {
    return (
        <section className="py-5 bg-light" id="home">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="display-4 fw-bold text-success">
                            Get Best Farming Products
                        </h1>
                        <p className="lead mb-4 text-muted">
                            🌱 Grow More, Worry Less — <strong>FarmBasket</strong> Delivers Success!
                        </p>
                        <a href="/products" className="btn btn-success btn-lg fw-bold">
                            Browse Products 🚜
                        </a>
                    </div>
                    <div className="col-md-6 text-center mt-4 mt-md-0">
                        <img
                            src={heroImage}
                            alt="Farming Hero"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
