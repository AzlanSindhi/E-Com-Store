// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ connect to "project" DB
mongoose.connect(
    "mongodb+srv://studyazlan84_db_user:azlan_84@cluster0.gzaqxub.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ DB connection error:", err));

/* ------------------- Customers ------------------- */
const CustomerSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
});
const Customer = mongoose.model("Customer", CustomerSchema, "customers");

app.get("/customers", async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/customers/:id", async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.json({ message: "Customer deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ------------------- Supplier Schema -------------------
const SupplierSchema = new mongoose.Schema({
    supplierId: String,
    name: String,
    contact: String,
    email: String,
    address: String,
    productsSupplied: [String],  // array of product names
});

// force Mongoose to use exact "supplier" collection
const Supplier = mongoose.model("Supplier", SupplierSchema, "supplier");

// ------------------- Routes -------------------

// Fetch all suppliers
app.get("/supplier", async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete supplier by ID
app.delete("/supplier/:id", async (req, res) => {
    try {
        await Supplier.findByIdAndDelete(req.params.id);
        res.json({ message: "Supplier deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* ------------------- Server ------------------- */
const PORT = 5000;
app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
);
