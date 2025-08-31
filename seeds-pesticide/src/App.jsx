import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Product from './components/Products'
import User from './components/User'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Dashboard from "./components/user-module/dashboard";
import Cust from './components/user-module/cust'
import Products from './components/user-module/products'
import Sales from './components/user-module/sales'
import Reports from './components/user-module/reports'
import Suppliers from './components/user-module/supplier'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
const AdminLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Outlet />
      </main>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/products", element: <Product /> },
        { path: "/user/:admin", element: <User /> },
        { path: "/signup", element: <Signup /> },
      ]
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
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
