import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you for your feedback! We will reach out soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div
            className="bg-light min-vh-80 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#e8f5e9" }}
        >
            <div className="w-100 p-5" style={{ minHeight: "80vh" }}>
                <h1 className="text-success fw-bold text-center mb-5">Contact Us</h1>

                <div className="row justify-content-center">

                    <div className="col-md-5 mb-4">
                        <h4 className="text-dark fw-semibold">Our Address</h4>
                        <p className="fs-6 text-dark">
                            FarmBasket Headquarters <br />
                            Valasd, Gujarat – 396001 <br />
                            India
                        </p>
                        <h5 className="text-success fw-semibold mt-3">Email</h5>
                        <p className="fs-6">support@farmbasket.in</p>
                    </div>


                    <div className="col-md-7">
                        <h4 className="text-dark fw-semibold mb-3">Send Us Feedback</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label fw-semibold">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-control"
                                    rows="4"
                                    placeholder="Write your feedback here..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-success w-100">
                                Send Feedback
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
