import React from "react";

const AboutUs = () => {
    return (
        <div className="bg-light min-vh-70 d-flex align-items-center justify-content-center">
            <div
                className="w-100 text-center p-5 shadow"
                style={{ backgroundColor: "#e8f5e9", minHeight: "85vh" }}
            >
                <h1 className="text-success fw-bold mb-4">About FarmBasket</h1>

                <p className="fs-5 text-dark">
                    Welcome to <span className="fw-bold text-success">FarmBasket</span> –
                    your trusted partner in agriculture. We provide farmers with
                    <span className="fw-bold"> high-quality seeds</span> and
                    <span className="fw-bold"> safe, effective pesticides</span> to help
                    increase crop yield and ensure sustainable farming practices.
                </p>

                <p className="fs-5 text-dark">
                    Our mission is to empower farmers by offering reliable products,
                    transparent pricing, and doorstep delivery – making farming
                    <span className="fw-bold text-success">
                        {" "}
                        easier, safer, and more profitable.
                    </span>
                </p>

                <p className="fs-4 text-dark">
                    FarmBasket is your trusted digital marketplace for farmers, offering
                    high-quality seeds, pesticides, and essential agricultural products
                    all in one place. We bridge the gap between modern farming needs and
                    reliable suppliers by providing certified seeds, safe crop protection
                    solutions, and affordable prices. Our mission is to empower farmers
                    with the right resources to increase productivity, ensure sustainable
                    farming, and improve livelihoods. With FarmBasket, farmers get
                    transparent pricing, doorstep delivery, and reliable support to grow
                    better crops and secure a better future. 🌾🌿
                </p>

                <p className="fs-5 text-dark">
                    With FarmBasket, farmers gain access to
                    <span className="fw-bold"> certified seeds, crop protection solutions,</span>
                    and continuous support to grow a healthier, greener future. 🌾🌱
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
