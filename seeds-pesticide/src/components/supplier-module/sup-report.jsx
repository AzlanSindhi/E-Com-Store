import React, { useEffect, useState } from "react";

const SupplierReports = () => {
  const [report, setReport] = useState({
    totalSalesAmount: 0,
    totalOrders: 0,
    productsSummary: [],
    topProducts: []
  });
  const [loading, setLoading] = useState(true);

  const supplier = JSON.parse(localStorage.getItem("supplier"));

  useEffect(() => {
    if (!supplier) {
      console.warn("⚠️ No supplier found in localStorage, not fetching reports");
      setLoading(false);
      return;
    }

    const fetchReport = async () => {
      try {
        const res = await fetch(`http://localhost:5000/supplier-reports?sup_id=${supplier.sup_id}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setReport(data);
      } catch (err) {
        console.error("❌ Error fetching supplier report:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [supplier]);

  if (loading) {
    return <p className="text-center mt-5">⏳ Loading supplier report...</p>;
  }

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        <h2 className="mb-4 pt-2 text-dark">📊 Supplier Reports</h2>

        {supplier && (
          <div className="alert alert-primary fw-bold">
            Viewing reports for: {supplier.supplier_name} (ID: {supplier.sup_id})
          </div>
        )}

        {/* Summary Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <div className="card text-center p-3 shadow-sm border-light">
              <h5>Total Sales Amount</h5>
              <p className="fs-4 fw-bold text-success">₹{report.totalSalesAmount}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card text-center p-3 shadow-sm border-light">
              <h5>Total Orders</h5>
              <p className="fs-4 fw-bold text-primary">{report.totalOrders}</p>
            </div>
          </div>
        </div>

        {/* Products Summary */}
        <h4 className="mb-3 text-dark">Products by Category</h4>
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Category</th>
              <th>Number of Items Sold</th>
            </tr>
          </thead>
          <tbody>
            {report.productsSummary.length > 0 ? (
              report.productsSummary.map((item, i) => (
                <tr key={i}>
                  <td>{item.category}</td>
                  <td>{item.count}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center text-muted">No data available</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Top Products */}
        <h4 className="mb-3 mt-4 text-dark">Top Products</h4>
        <table className="table table-striped table-bordered">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Sales Amount</th>
            </tr>
          </thead>
          <tbody>
            {report.topProducts.length > 0 ? (
              report.topProducts.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td className="text-success">₹{p.sales}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center text-muted">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierReports;
