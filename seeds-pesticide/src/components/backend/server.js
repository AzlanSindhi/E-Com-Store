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
  id: String,
  name: String,
  email: String,
  address: String,
  dob: String
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

/* ------------------- Customer Signup ------------------- */
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, address, dob } = req.body;

    // ✅ Check if user already exists
    const existing = await CustMaster.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "❌ Email already registered" });
    }

    // ✅ Generate customer ID (CUS001, CUS002, ...)
    const count = await CustMaster.countDocuments();
    const cust_id = `CUS${(count + 1).toString().padStart(3, "0")}`;

    // ✅ Save in cust_master collection
    const newCustomer = new CustMaster({ cust_id, cust_name: name, email, password });
    await newCustomer.save();

    // ✅ Optionally save in customers collection (if you want profile data separately)
    const newCustomerProfile = new Customer({ id: cust_id, name, email, address, dob });
    await newCustomerProfile.save();

    res.json({ message: "✅ Signup successful", cust_id });
  } catch (err) {
    console.error("❌ Signup error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


/* ------------------- Supplier Schema ------------------- */
const SupplierSchema = new mongoose.Schema({
  sup_id: { type: String, unique: true },
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  category: { type: String, enum: ["Seeds", "Pesticides", "Both"], required: true },
  products_supplied: { type: [String], default: [] }
});
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
  id: String,
  product_name: String,
  type: String,
  quantity: String,
  price: Number,
  description: String,
  how_to_use: String,
  benefits: [String],
  supplier_id: String,
  status: String,
  stocks: Number,
  url: String
});
const Product = mongoose.model("Product", ProductSchema, "products");

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products/type/:type", async (req, res) => {
  try {
    const products = await Product.find({ type: req.params.type });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/products/supplier/:sup_id", async (req, res) => {
  try {
    const products = await Product.find({ supplier_id: req.params.sup_id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------- Orders ------------------- */
const OrderSchema = new mongoose.Schema({
  order_id: String,
  customer: {
    name: String,
    email: String,
    phone: String,
    address: String,
    payment: String
  },
  items: [
    { _id: String, product_name: String, price: Number, count: Number }
  ],
  total: Number,
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["Pending", "Processing", "Delivered"], default: "Pending" },
  sup_id: String
});
const Order = mongoose.model("Order", OrderSchema, "orders");
/* ------------------- Orders (with Supplier Filter) ------------------- */
app.get("/orders", async (req, res) => {
  try {
    const { sup_id } = req.query;
    const filter = sup_id ? { sup_id } : {}; // ✅ admin gets all, supplier gets their own
    const orders = await Order.find(filter).sort({ date: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/orders", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.json({ message: "✅ Order saved successfully", order: newOrder });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/orders/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "✅ Order deleted successfully" });
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
    const orderCount = await Order.countDocuments();

    const totalSalesAgg = await Order.aggregate([
      { $group: { _id: null, total: { $sum: "$total" } } }
    ]);

    res.json({
      customers: customerCount,
      suppliers: supplierCount,
      products: productCount,
      sales: orderCount,
      totalSalesAmount: totalSalesAgg[0]?.total || 0,
      reports: 9
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------- Cust Master ------------------- */
const CustMasterSchema = new mongoose.Schema({
  cust_id: String,
  cust_name: String,
  email: String,
  password: String
});
const CustMaster = mongoose.model("CustMaster", CustMasterSchema, "cust_master");

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await CustMaster.findOne({ email, password });
    if (!user) return res.status(401).json({ message: "Invalid email or password" });
    
    // ✅ Return cust_name instead of just name
    res.json({ 
      message: "✅ Login successful", 
      cust_name: user.cust_name, 
      email: user.email 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ------------------- Supplier Master Schema ------------------- */
const SupMasterSchema = new mongoose.Schema({
  sup_id: String,
  supplier_name: String,
  email: String,
  password: String
});
const SupMaster = mongoose.model("SupMaster", SupMasterSchema, "supplier_master");

/* ------------------- Supplier Login ------------------- */
app.post("/supplier-module/sup-login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const supplier = await SupMaster.findOne({ email, password });
    if (!supplier) {
      return res.status(401).json({ message: "❌ Invalid Email or Password" });
    }

    res.json({
      message: "✅ Login successful",
      sup_id: supplier.sup_id,
      supplier_name: supplier.supplier_name,
      email: supplier.email
    });
  } catch (err) {
    console.error("❌ Supplier login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ------------------- Supplier Signup ------------------- */
app.post("/supplier-signup", async (req, res) => {
  const { name, contact, email, address, category, password } = req.body;
  try {
    const existing = await SupMaster.findOne({ email });
    if (existing) return res.status(400).json({ message: "❌ Email already registered" });

    const count = await SupMaster.countDocuments();
    const sup_id = `SUP${(count + 1).toString().padStart(3, "0")}`;

    const newSupplier = new Supplier({ sup_id, name, contact, email, address, category, products_supplied: [] });
    await newSupplier.save();

    const newSupMaster = new SupMaster({ sup_id, supplier_name: name, email, password });
    await newSupMaster.save();

    res.json({ message: "✅ Supplier registered successfully. Wait for admin approval.", sup_id });
  } catch (err) {
    console.error("❌ Supplier signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ------------------- Reports (Overall) ------------------- */
app.get("/reports", async (req, res) => {
  try {
    const orders = await Order.find();

    // ✅ Total sales & total orders
    const totalSales = orders.reduce((sum, order) => sum + order.total, 0);
    const totalOrders = orders.length;

    // ✅ Products sold by category
    const productsSold = {};
    for (let order of orders) {
      for (let item of order.items) {
        const product = await Product.findOne({ product_name: item.product_name });
        if (!product) continue;

        const cat = product.type || "Unknown";
        if (!productsSold[cat]) productsSold[cat] = { totalQuantity: 0 };
        productsSold[cat].totalQuantity += item.count;
      }
    }

    // ✅ Top products (by sales amount)
    const productMap = {};
    for (let order of orders) {
      for (let item of order.items) {
        if (!productMap[item.product_name]) productMap[item.product_name] = 0;
        productMap[item.product_name] += item.price * item.count;
      }
    }

    const topProducts = Object.entries(productMap)
      .sort((a, b) => b[1] - a[1]) // sort by sales amount
      .slice(0, 5)
      .map(([name, sales]) => ({ name, sales }));

    res.json({
      totalSales,
      totalOrders,
      productsSold,
      topProducts
    });
  } catch (err) {
    console.error("❌ Reports error:", err);
    res.status(500).json({ error: err.message });
  }
});

/* ------------------- Supplier Reports ------------------- */
app.get("/reports/:month", async (req, res) => {
  try {
    const { month } = req.params;
    const { sup_id } = req.query;

    if (!sup_id) {
      return res.status(400).json({ message: "Supplier ID (sup_id) is required" });
    }

    // Convert month name -> index
    const monthIndex = new Date(`${month} 1, 2025`).getMonth(); 
    const year = 2025; // 🔥 or use req.query.year if needed

    const start = new Date(year, monthIndex, 1);
    const end = new Date(year, monthIndex + 1, 1);

    // ✅ Find orders in this month
    const orders = await Order.find({
      date: { $gte: start, $lt: end }
    });

    let totalSales = 0;
    let totalOrders = 0;
    const productsSold = {};
    const productMap = {};

    for (let order of orders) {
      // only include items for this supplier
      const supplierItems = [];
      for (let item of order.items) {
        const product = await Product.findOne({ product_name: item.product_name });
        if (!product) continue;

        if (product.sup_id === sup_id) {
          supplierItems.push(item);

          // add to category summary
          const cat = product.type || "Unknown";
          if (!productsSold[cat]) productsSold[cat] = { totalQuantity: 0 };
          productsSold[cat].totalQuantity += item.count;

          // add to top products
          if (!productMap[item.product_name]) productMap[item.product_name] = 0;
          productMap[item.product_name] += item.price * item.count;

          // add to total sales
          totalSales += item.price * item.count;
        }
      }

      if (supplierItems.length > 0) {
        totalOrders += 1; // order had at least one item for this supplier
      }
    }

    const topProducts = Object.entries(productMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, sales]) => ({ name, sales }));

    res.json({
      totalSalesAmount: totalSales,
      totalOrders,
      productsSummary: Object.entries(productsSold).map(([category, obj]) => ({
        category,
        count: obj.totalQuantity
      })),
      topProducts
    });
  } catch (err) {
    console.error("❌ Supplier report error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Supplier Reports API
app.get("/supplier-reports", async (req, res) => {
  try {
    const { sup_id } = req.query;

    if (!sup_id) {
      return res.status(400).json({ message: "Supplier ID (sup_id) is required" });
    }

    const orders = await Order.find();

    let totalSales = 0;
    let totalOrders = 0;
    const productsSold = {};
    const productMap = {};

    for (let order of orders) {
      let supplierOrder = false;

      for (let item of order.items) {
        const product = await Product.findOne({ product_name: item.product_name });
        if (!product) continue;

        if (product.supplier_id === sup_id) {
          supplierOrder = true;

          const cat = product.type || "Unknown";
          if (!productsSold[cat]) productsSold[cat] = { totalQuantity: 0 };
          productsSold[cat].totalQuantity += item.count;

          if (!productMap[item.product_name]) productMap[item.product_name] = 0;
          productMap[item.product_name] += item.price * item.count;

          totalSales += item.price * item.count;
        }
      }

      if (supplierOrder) {
        totalOrders += 1;
      }
    }

    const topProducts = Object.entries(productMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, sales]) => ({ name, sales }));

    res.json({
      totalSalesAmount: totalSales,
      totalOrders,
      productsSummary: Object.entries(productsSold).map(([category, obj]) => ({
        category,
        count: obj.totalQuantity
      })),
      topProducts
    });
  } catch (err) {
    console.error("❌ Supplier report error:", err);
    res.status(500).json({ error: err.message });
  }
});


/* ------------------- Server ------------------- */
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
