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

/* ------------------- Suppliers ------------------- */
const SupplierSchema = new mongoose.Schema({
    supplier_id: String,
    name: String,
    contact: String,
    email: String,
    address: String,
    products_supplied: [String], // array of product names
});

// force Mongoose to use exact "supplier" collection
const Supplier = mongoose.model("Supplier", SupplierSchema, "supplier");

app.get("/supplier", async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/supplier/:id", async (req, res) => {
    try {
        await Supplier.findByIdAndDelete(req.params.id);
        res.json({ message: "Supplier deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/* ------------------- Products ------------------- */
const ProductSchema = new mongoose.Schema({
    product_name: String,
    type: String,
    price: Number,
    quanity: Number,
    status: String,
    supplier_id: String,
});

// ✅ exact collection "products"
const Product = mongoose.model("products", ProductSchema, "products");

// fetch all products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// fetch one product by ID
app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// add new product
app.post("/products", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// update product
app.put("/products/:id", async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// delete product
app.delete("/products/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// fetch products by type (e.g., pesticides, seeds)
app.get("/products/type/:type", async (req, res) => {
    try {
        const products = await Product.find({ type: req.params.type });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// fetch one product by ID
app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
/* ------------------- Sales ------------------- */
const SalesSchema = new mongoose.Schema({
    Product: String,       // Product name
    Category: String,      // Seeds / Pesticides
    Quantity: Number,      // Quantity sold
    Amount: Number,        // Total sale amount
    Date: String,  // Sale date
    Customer: String       // Customer name
});

// force mongoose to use "sales" collection
const Sales = mongoose.model("Sales", SalesSchema, "sales");

// fetch all sales
app.get("/sales", async (req, res) => {
    try {
        const sales = await Sales.find();
        res.json(sales);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// add new sale
app.post("/sales", async (req, res) => {
    try {
        const newSale = new Sales(req.body);
        await newSale.save();
        res.json(newSale);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// delete sale
app.delete("/sales/:id", async (req, res) => {
    try {
        await Sales.findByIdAndDelete(req.params.id);
        res.json({ message: "Sale deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
/* ------------------- Dashboard Stats ------------------- */
app.get("/dashboard-stats", async (req, res) => {
    try {
        const customerCount = await Customer.countDocuments();
        const supplierCount = await Supplier.countDocuments();
        const productCount = await Product.countDocuments();
        const salesCount = await Sales.countDocuments();

        // Total sales amount (ensure Amount field is string/number)
        const totalSalesAmountAgg = await Sales.aggregate([
            { $group: { _id: null, totalAmount: { $sum: { $toDouble: "$Amount" } } } }
        ]);
        const totalSalesAmount = totalSalesAmountAgg[0]?.totalAmount || 0;

        const reportCount = 9; // Fixed, or you can compute dynamically if needed

        res.json({
            customers: customerCount,
            suppliers: supplierCount,
            products: productCount,
            sales: salesCount,
            totalSalesAmount,
            reports: reportCount
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});


/* ------------------- Reports ------------------- */
app.get("/reports/:month", async (req, res) => {
    try {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const monthIndex = monthNames.indexOf(req.params.month);
        if (monthIndex === -1) return res.status(400).json({ error: "Invalid month" });

        const year = 2025; // set your year
        const startDate = new Date(year, monthIndex, 1);
        const endDate = new Date(year, monthIndex + 1, 0, 23, 59, 59);

        // Fetch sales in that month
        const salesInMonth = await Sales.find({
            Date: { $gte: startDate.toISOString(), $lte: endDate.toISOString() }
        });

        // Total sales amount
        const totalSalesAmount = salesInMonth.reduce((sum, sale) => sum + Number(sale.Amount), 0);

        // Total orders
        const totalOrders = salesInMonth.length;

        // Products summary by category
        const productsSummaryMap = {};
        salesInMonth.forEach(sale => {
            productsSummaryMap[sale.Category] = (productsSummaryMap[sale.Category] || 0) + sale.Quantity;
        });
        const productsSummary = Object.keys(productsSummaryMap).map(key => ({
            category: key,
            count: productsSummaryMap[key]
        }));

        // Top products by sales amount
        const productMap = {};
        salesInMonth.forEach(sale => {
            productMap[sale.Product] = (productMap[sale.Product] || 0) + Number(sale.Amount);
        });
        const topProducts = Object.entries(productMap)
            .map(([name, sales]) => ({ name, sales }))
            .sort((a, b) => b.sales - a.sales)
            .slice(0, 5); // top 5 products

        res.json({ totalSalesAmount, totalOrders, productsSummary, topProducts });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

/* ------------------- Cust Master ------------------- */
const CustMasterSchema = new mongoose.Schema({
    cust_name: String,
    email: String,
    password: String,
});

const CustMaster = mongoose.model("CustMaster", CustMasterSchema, "cust_master");

// ✅ Login API
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await CustMaster.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        res.json({ message: "Login successful", cust_name: user.cust_name });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


/* ------------------- Server ------------------- */
const PORT = 5000;
app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
);
