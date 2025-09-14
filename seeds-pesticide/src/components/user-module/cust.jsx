import React, { useEffect, useState } from "react";
import AdminNav from "./admin-nav";

const Customers = () => {
    const [customers, setCustomers] = useState([]);

    // Fetch data from backend
    useEffect(() => {
        fetch("http://localhost:5000/customers")
            .then((res) => res.json())
            .then((data) => setCustomers(data))
            .catch((err) => console.error("❌ Error fetching customers:", err));
    }, []);

    // Delete handler
    const handleRemove = async (id) => {
        try {
            await fetch(`http://localhost:5000/customers/${id}`, {
                method: "DELETE",
            });
            setCustomers(customers.filter((c) => c._id !== id)); // update UI
        } catch (err) {
            console.error("❌ Error deleting:", err);
        }
    };

    return (
        <div className="bg-dark text-white min-vh-100">
            <AdminNav />
            <div className="container py-4">
                <h2 className="mb-4">Customer Management</h2>

                <div className="table-responsive">
                    <table className="table table-dark table-striped table-hover align-middle">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>DOB</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.length > 0 ? (
                                customers.map((cust, index) => (
                                    <tr key={cust.id}>
                                        <td>{index + 1}</td>
                                        <td>{cust.name}</td>
                                        <td>{cust.email}</td>
                                        <td>{cust.address}</td>
                                        <td>{cust.dob}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleRemove(cust._id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        No customers found
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

export default Customers;
