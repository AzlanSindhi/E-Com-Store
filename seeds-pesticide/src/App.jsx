import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Product from './components/Products'
import User from './components/User'
import Signup from './components/Signup'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// Layout with Navbar + Footer always included
const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Nav />
      <main className="flex-grow-1">
        <Outlet /> {/* Page content will render here */}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,  // Wrap all routes with layout
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/products", element: <Product /> },
        { path: "/user/:admin", element: <User /> },
        { path: "/signup", element: <Signup /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
