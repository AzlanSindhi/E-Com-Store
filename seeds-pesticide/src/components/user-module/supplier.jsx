import React, { useEffect, useState } from "react";
import AdminNav from "./admin-nav";

const Supplier = () => {
    const [suppliers, setSuppliers] = useState([]);

    // ✅ Fetch supplier data
    useEffect(() => {
        fetch("http://localhost:5000/supplier")
            .then(res => res.json())
            .then(data => setSuppliers(data))
            .catch(err => console.error("❌ Error fetching suppliers:", err));
    }, []);

    // ✅ Delete supplier
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
            <div className="container-fluid py-4">
                <h2 className="mb-4 text-center">Supplier Management</h2>

                <div className="table-responsive">
                    <table
                        className="table table-dark table-striped table-hover align-middle table-bordered"
                        style={{ minWidth: "1200px" }}
                    >
                        <thead className="table-light text-dark">
                            <tr>
                                <th className="text-center">#</th>
                                <th>Supplier ID</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Products Supplied</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {suppliers.length > 0 ? (
                                suppliers.map((sup, index) => (
                                    <tr key={sup.sup_id}>
                                        <td className="text-center fw-bold">{index + 1}</td>
                                        <td className="fw-semibold">{sup.sup_id}</td>
                                        <td>{sup.name}</td>
                                        <td>{sup.contact}</td>
                                        <td>{sup.email}</td>
                                        <td style={{ whiteSpace: "nowrap" }}>{sup.address}</td>
                                        <td>
                                            {Array.isArray(sup.products_supplied)
                                                ? sup.products_supplied.join(", ")
                                                : "-"}
                                        </td>
                                        <td className="text-center">
                                            <button
                                                className="btn btn-sm btn-outline-light px-3"
                                                onClick={() => handleRemove(sup._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center py-3">
                                        No suppliers found
                                    </td>
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
