import React from "react";
import { NavLink } from "react-router-dom";

const Cust = () => {
    const sampleUsers = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
        { id: 3, name: "David Miller", email: "david@example.com", role: "User", status: "Active" },
        { id: 4, name: "Emily Johnson", email: "emily@example.com", role: "Moderator", status: "Active" },
    ];

    return (
        <div className="container mt-4 bg-dark text-white p-4 rounded" style={{ minHeight: "80vh" }}>
            <h2 className="mb-4">Customer Management</h2>

            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleUsers.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{cust.name}</td>
                            <td>{cust.email}</td>
                            <td>{cust.role}</td>
                            <td>
                                <span className={`badge ${cust.status === "Active" ? "bg-success" : "bg-danger"}`}>
                                    {user.status}
                                </span>
                            </td>
                            <td>
                                <NavLink to={`/admin-module/cust/${cust.id}`} className="btn btn-sm btn-outline-info me-2">
                                    View
                                </NavLink>
                                <button className="btn btn-sm btn-outline-warning me-2">Edit</button>
                                <button className="btn btn-sm btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cust;
