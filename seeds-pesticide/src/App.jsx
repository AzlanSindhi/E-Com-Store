import './App.css'
import Nav from './components/Nav'
import Home from './components/home'
import Login from './components/Login'
import Product from './components/Products'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Nav /><Home /></>
    },
    {
      path: "/login",
      element: <><Nav /><Login /></>
    },
    {
      path: "/products",
      element: <><Nav /><Product /></>
    },
    {
      path: "/user/:username",
      element: <><Nav /><User /></>
    },
  ])
  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App