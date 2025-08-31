import React from "react";
import { NavLink } from "react-router-dom";
import AdminNav from "./admin-nav";

const Users = () => {
    const sampleUsers = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
        { id: 3, name: "David Miller", email: "david@example.com", role: "User", status: "Active" },
        { id: 4, name: "Emily Johnson", email: "emily@example.com", role: "Moderator", status: "Active" },
    ];

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
                                <th>Role</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sampleUsers.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <span
                                            className={`badge ${user.status === "Active" ? "bg-success" : "bg-danger"
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-outline-warning me-2">Edit</button>
                                        <button className="btn btn-sm btn-outline-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
