import React, { useEffect, useState } from "react";
import AdminNav from "./admin-nav";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // fetch orders
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("❌ Error fetching orders:", err));
  }, []);

  // delete order
  const handleRemove = async (id) => {
    try {
      await fetch(`http://localhost:5000/orders/${id}`, { method: "DELETE" });
      setOrders(orders.filter((o) => o._id !== id));
    } catch (err) {
      console.error("❌ Error deleting order:", err);
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <AdminNav />
      <div className="container py-4">
        <h2 className="mb-4">Orders Management</h2>

        <div className="table-responsive">
          <table className="table table-dark table-striped table-hover align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Total (₹)</th>
                <th>Status</th>
                <th>Date</th>
                <th>Products</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={order._id}>
                    <td>{index + 1}</td>
                    <td>{order.order_id}</td>
                    <td>{order.customer.name}</td>
                    <td>{order.customer.phone}</td>
                    <td>₹{order.total}</td>
                    <td>{order.status}</td>
                    <td>{new Date(order.date).toLocaleString()}</td>
                    <td>
                      <ul className="list-unstyled m-0">
                        {order.items.map((item, i) => (
                          <li key={i}>
                            {item.product_name} (x{item.count})
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleRemove(order._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center">No orders found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
