import React, { useEffect, useState } from "react";
import AdminNav from "./admin-nav";

const Supplier = () => {
    const [suppliers, setSuppliers] = useState([]);

    // Fetch supplier data from backend
    useEffect(() => {
        fetch("http://localhost:5000/supplier")
            .then(res => res.json())
            .then(data => setSuppliers(data))
            .catch(err => console.error("❌ Error fetching suppliers:", err));
    }, []);

    // Delete supplier
    const handleRemove = async (id) => {
        try {
            await fetch(`http://localhost:5000/supplier/${id}`, { method: "DELETE" });
            setSuppliers(suppliers.filter(s => s._id !== id));
        } catch (err) {
            console.error("❌ Error deleting supplier:", err);
        }
    };

    return (
        <div className="bg-dark text-white min-vh-100">
            <AdminNav />
            <div className="container py-4">
                <h2 className="mb-4">Supplier Management</h2>

                <div className="table-responsive">
                    <table className="table table-dark table-striped table-hover align-middle">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Supplier ID</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Products Supplied</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.length > 0 ? (
                                suppliers.map((sup, index) => (
                                    <tr key={sup._id}>
                                        <td>{index + 1}</td>
                                        <td>{sup.supplier_id}</td>
                                        <td>{sup.name}</td>
                                        <td>{sup.contact}</td>
                                        <td>{sup.email}</td>
                                        <td>{sup.address}</td>
                                        <td>{Array.isArray(sup.products_supplied) ? sup.products_supplied.join(", ") : sup.products_supplied}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleRemove(sup._id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No suppliers found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Supplier;
