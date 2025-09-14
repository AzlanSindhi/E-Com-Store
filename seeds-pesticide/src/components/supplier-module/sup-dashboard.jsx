import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SupplierDashboard = () => {
  const [supplier, setSupplier] = useState(null);
  const [stats, setStats] = useState({
    products: 0,
    pendingOrders: 0,
    deliveredOrders: 0,
    totalEarnings: 0,
    lowStock: 0,
    reports: 0,
    topProducts: [],
    monthlyOrders: 0,
    monthlyEarnings: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSupplier = localStorage.getItem("supplier");
    if (!storedSupplier) return navigate("/supplier-module/sup-login");

    const sup = JSON.parse(storedSupplier);
    setSupplier(sup);

    // ✅ Fetch products
    fetch(`http://localhost:5000/products/supplier/${sup.sup_id}`)
      .then(res => res.json())
      .then(data => {
        const lowStock = data.filter(p => p.stocks < 10);
        setStats(prev => ({
          ...prev,
          products: data.length,
          lowStock: lowStock.length
        }));
      });

    // ✅ Fetch orders
    fetch(`http://localhost:5000/orders?sup_id=${sup.sup_id}`)
      .then(res => res.json())
      .then(data => {
        const pending = data.filter(o => o.status === "Pending").length;
        const delivered = data.filter(o => o.status === "Delivered").length;
        const earnings = data.reduce((sum, o) => sum + o.total, 0);

        setStats(prev => ({
          ...prev,
          pendingOrders: pending,
          deliveredOrders: delivered,
          totalEarnings: earnings,
          reports: 9, // static for now
          monthlyOrders: data.length,
          monthlyEarnings: earnings
        }));

        // show 5 recent orders
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setRecentOrders(sorted.slice(0, 5));
      });

  }, [navigate]);

  const cards = [
    { title: "My Products", value: stats.products, link: "/supplier-module/myproducts", color: "linear-gradient(135deg, #1e88e5, #42a5f5)" },
    { title: "Pending Orders", value: stats.pendingOrders, link: "/supplier-module/orders", color: "linear-gradient(135deg, #43a047, #66bb6a)" },
    { title: "Delivered Orders", value: stats.deliveredOrders, link: "/supplier-module/orders", color: "linear-gradient(135deg, #fb8c00, #ffa726)" },
    { title: "Total Earnings", value: `₹${stats.totalEarnings}`, link: "/supplier-module/sup-report", color: "linear-gradient(135deg, #8e24aa, #ab47bc)" },
    { title: "Low Stock Items", value: stats.lowStock, link: "/supplier-module/myproducts", color: "linear-gradient(135deg, #e53935, #ef5350)" },
    { title: "Reports", value: stats.reports, link: "/supplier-module/sup-report", color: "linear-gradient(135deg, #00acc1, #26c6da)" },
    { title: "Top Products", value: stats.topProducts.length, link: "/supplier-module/sup-report", color: "linear-gradient(135deg, #fdd835, #ffeb3b)" },
    { title: "Monthly Orders", value: stats.monthlyOrders, link: "/supplier-module/orders", color: "linear-gradient(135deg, #6d4c41, #8d6e63)" },
    { title: "Monthly Earnings", value: `₹${stats.monthlyEarnings}`, link: "/supplier-module/sup-report", color: "linear-gradient(135deg, #5e35b1, #7e57c2)" },
  ];

  return (
    <div className="container-fluid min-vh-100" style={{ background: "linear-gradient(to right, #e3f2fd, #bbdefb)" }}>
      <div className="container pt-3">
        <h2 className="mb-4 fw-bold text-dark">Welcome, {supplier?.supplier_name || "Supplier"}</h2>
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={index} className="col-md-4 col-12">
              <div className="card text-white shadow text-center p-3 h-100" style={{ background: card.color }}>
                <h5>{index + 1}️⃣ {card.title}</h5>
                <p className="fs-4 fw-bold">{card.value}</p>
                <NavLink to={card.link} className="btn btn-sm btn-light mt-2">
                  View
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders Table */}
        <div className="mt-5">
          <h4 className="text-dark">Recent Orders</h4>
          <table className="table table-hover table-striped shadow">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Buyer</th>
                <th>Quantity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.length > 0 ? recentOrders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.items.map(i => i.product_name).join(", ")}</td>
                  <td>{order.customer.name}</td>
                  <td>{order.items.reduce((sum, i) => sum + i.count, 0)}</td>
                  <td>
                    <span className={`badge ${
                      order.status === "Delivered" ? "bg-success" :
                      order.status === "Pending" ? "bg-warning text-dark" : "bg-danger"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">No recent orders.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;
