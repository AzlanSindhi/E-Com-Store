import './App.css'
import Nav from './components/Nav'
import Home from './components/home'
import Login from './components/Login'
import Category from './components/Category'
import User from './components/User'
import Signup from './components/Signup'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Seeds from './components/seeds-page'
import Pest from './components/pest-page'
import ProductPage from './components/Products'
import Cart from './components/cart'
import Checkout from './components/checkout'

// User/Admin Module
import Dashboard from "./components/user-module/dashboard";
import Cust from './components/user-module/cust'
import Products from './components/user-module/products'
import Sales from './components/user-module/sales'
import Reports from './components/user-module/reports'
import Suppliers from './components/user-module/supplier'

// Supplier Module
import SupDashboard from './components/supplier-module/sup-dashboard'
import SupNav from './components/supplier-module/sup-nav'
import SupProducts from './components/supplier-module/myproducts'
import Orders from './components/supplier-module/orders'
import SupplierReport from './components/supplier-module/sup-report'
import SupLogin from './components/supplier-module/sup-login'
import SupSignup from './components/supplier-module/sup-sign'
import AddProduct from './components/supplier-module/addproducts'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// Layouts
const PublicLayout = () => (
  <div className="d-flex flex-column min-vh-100">
    <Nav />
    <main className="flex-grow-1">
      <Outlet />
    </main>
    <Footer />
  </div>
)

const AdminLayout = () => (
  <div className="d-flex flex-column min-vh-100">
    <main className="flex-grow-1 bg-light">
      <Outlet />
    </main>
  </div>
)

const SupplierLayout = () => (
  <div className="d-flex flex-column min-vh-100 bg-gradient">
    <SupNav />
    <main className="flex-grow-1">
      <Outlet />
    </main>
  </div>
)

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/category", element: <Category /> },
        { path: "/signup", element: <Signup /> },
        { path: "/user/:admin", element: <User /> },
        { path: "/supplier-module/sup-login", element: <SupLogin /> },
        { path: "/supplier-module/sup-sign", element: <SupSignup /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/seeds", element: <Seeds /> },
        { path: "/pest-page", element: <Pest /> },
        { path: "/products/:category/:id", element: <ProductPage /> },
        { path: "/cart", element: <Cart /> },
        { path: "/checkout", element: <Checkout /> }
      ],
    },
    {
      path: "/user-module",
      element: <AdminLayout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "products", element: <Products /> },
        { path: "sales", element: <Sales /> },
        { path: "reports", element: <Reports /> },
        { path: "cust", element: <Cust /> },
        { path: "supplier", element: <Suppliers /> },
      ],
    },
    {
      path: "/supplier-module",
      children: [

        { path: "login", element: <SupLogin /> },
        { path: "signup", element: <SupSignup /> },

        {
          element: <SupplierLayout />,
          children: [
            { path: "sup-dashboard", element: <SupDashboard /> },
            { path: "myproducts", element: <SupProducts /> },
            { path: "orders", element: <Orders /> },
            { path: "sup-report", element: <SupplierReport /> },
            { path: "addproducts", element: <AddProduct /> }
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
