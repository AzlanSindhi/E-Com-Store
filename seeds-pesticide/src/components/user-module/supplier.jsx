import React from "react";
import { NavLink } from "react-router-dom";
import AdminNav from "./admin-nav";

const Suppliers = () => {
    // Sample supplier data
    const suppliers = [
        { id: "SUP001", name: "Agro Seeds Pvt Ltd", contact: "9876543210", email: "info@agroseeds.com", address: "Nagpur, Maharashtra", products: "Wheat, Rice, Corn" },
        { id: "SUP002", name: "Green Pesticides Co", contact: "9823456789", email: "support@greenpest.com", address: "Indore, MP", products: "Neem Oil, Insect Killer" },
        { id: "SUP003", name: "Farm Fresh Agro", contact: "9012345678", email: "farmfresh@agro.com", address: "Lucknow, UP", products: "Cotton Seeds, Sunflower Seeds" },
        { id: "SUP004", name: "CropCare Pvt Ltd", contact: "9871234567", email: "sales@cropcare.com", address: "Ahmedabad, Gujarat", products: "Herbicides, Fungicides" },
    ];

    return (
        <div className="bg-dark text-white min-vh-100">
            <AdminNav />
            <div className="container py-4">
                <h2 className="mb-4">Manage Suppliers</h2>

                <div className="table-responsive">
                    <table className="table table-dark table-striped table-hover align-middle mb-0">
                        <thead>
                            <tr>
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
                            {suppliers.map((supplier, index) => (
                                <tr key={index}>
                                    <td>{supplier.id}</td>
                                    <td>{supplier.name}</td>
                                    <td>{supplier.contact}</td>
                                    <td>{supplier.email}</td>
                                    <td>{supplier.address}</td>
                                    <td>{supplier.products}</td>
                                    <td>
                                        <NavLink
                                            to={`/user-module/supplier/${supplier.id}`}
                                            className="btn btn-sm btn-outline-info me-2"
                                        >
                                            View
                                        </NavLink>
                                        <button className="btn btn-sm btn-outline-danger ms-1">Delete</button>
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

export default Suppliers;
