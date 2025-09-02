import React, { useState } from "react";

const Cart = () => {
    // Dummy cart data (later from context / DB)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            category: "seeds",
            name: "Wheat Seeds",
            supplier: "AgroSupplies Pvt Ltd",
            price: 500,
            quantity: "10kg",
            image: "/assets/products/Seeds/Wheat-Seed.jpg",
            count: 1
        },
        {
            id: 2,
            category: "pests",
            name: "Neem Oil",
            supplier: "BioFarm",
            price: 350,
            quantity: "1 litre",
            image: "https://via.placeholder.com/150x150.png?text=Neem+Oil",
            count: 2
        }
    ]);

    // Handle remove item
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    // Handle quantity increase/decrease
    const updateCount = (id, type) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        count:
                            type === "inc"
                                ? item.count + 1
                                : item.count > 1
                                    ? item.count - 1
                                    : 1
                    }
                    : item
            )
        );
    };

    // Calculate total
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.count,
        0
    );

    return (
        <div className="container py-5">
            <h2 className="text-center text-success fw-bold mb-4">🛒 Your Cart</h2>

            {cartItems.length === 0 ? (
                <h5 className="text-center text-muted">Your cart is empty</h5>
            ) : (
                <div className="row">
                    <div className="col-md-8">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="card mb-3 shadow-sm border-0 p-3"
                                style={{ borderRadius: "15px" }}
                            >
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="fw-bold text-success">{item.name}</h5>
                                        <p className="mb-1">
                                            <strong>Supplier:</strong> {item.supplier}
                                        </p>
                                        <p className="mb-1">
                                            <strong>Price:</strong> ₹{item.price} / {item.quantity}
                                        </p>
                                        <div className="d-flex align-items-center">
                                            <button
                                                className="btn btn-outline-success btn-sm me-2"
                                                onClick={() => updateCount(item.id, "dec")}
                                            >
                                                -
                                            </button>
                                            <span className="fw-bold">{item.count}</span>
                                            <button
                                                className="btn btn-outline-success btn-sm ms-2"
                                                onClick={() => updateCount(item.id, "inc")}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-end">
                                        <p className="fw-bold text-success">
                                            ₹{item.price * item.count}
                                        </p>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="col-md-4">
                        <div className="card shadow-lg p-3 border-0">
                            <h5 className="fw-bold text-success">Cart Summary</h5>
                            <hr />
                            <p className="d-flex justify-content-between">
                                <span>Total Items:</span>
                                <span>{cartItems.reduce((sum, i) => sum + i.count, 0)}</span>
                            </p>
                            <p className="d-flex justify-content-between">
                                <span>Total Price:</span>
                                <span className="fw-bold text-success">₹{totalPrice}</span>
                            </p>
                            <button className="btn btn-success w-100 mt-2">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
