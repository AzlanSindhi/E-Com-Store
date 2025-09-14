import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Get supplier details from localStorage
  const supplier = JSON.parse(localStorage.getItem("supplier"));

  useEffect(() => {
    if (!supplier) {
      console.warn("⚠️ No supplier found in localStorage, not fetching orders");
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await fetch(`http://localhost:5000/orders?sup_id=${supplier.sup_id}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("❌ Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [supplier]);

  const updateStatus = async (id, newStatus) => {
    // Update locally
    setOrders((prevOrders) =>
      prevOrders.map((o) => (o._id === id ? { ...o, status: newStatus } : o))
    );

    // Persist to backend
    try {
      await fetch(`http://localhost:5000/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
    } catch (err) {
      console.error("❌ Error updating order status:", err);
    }
  };

  if (loading) {
    return <p className="text-center mt-5">⏳ Loading orders...</p>;
  }

  return (
    <div
      className="container-fluid p-4 min-vh-100"
      style={{ background: "linear-gradient(to right, #f1f8e9, #dcedc8)" }}
    >
      <h2 className="fw-bold text-success mb-4 text-center">🌾 Supplier Orders</h2>

      <div className="card shadow p-3 border-0" style={{ borderRadius: "12px" }}>
        <h5 className="mb-3 text-success">📋 Order List</h5>
        <table className="table table-hover align-middle text-center">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price (₹)</th>
              <th>Delivery Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((o, index) => (
                <tr key={o._id}>
                  <td>{index + 1}</td>
                  <td className="fw-semibold text-success">
                    {o.items.map((item) => item.product_name).join(", ")}
                  </td>
                  <td>{o.items.reduce((sum, item) => sum + item.count, 0)}</td>
                  <td className="fw-bold text-dark">₹{o.total}</td>
                  <td className="text-start">{o.customer.address}</td>
                  <td>
                    <span
                      className={`badge px-3 py-2 ${
                        o.status === "Delivered" ? "bg-success" : "bg-warning text-dark"
                      }`}
                      style={{ borderRadius: "8px" }}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td>
                    {o.status === "Pending" ? (
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => updateStatus(o._id, "Delivered")}
                      >
                        ✅ Mark Delivered
                      </button>
                    ) : (
                      <button className="btn btn-sm btn-secondary" disabled>
                        ✔ Delivered
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-muted">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
