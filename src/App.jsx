import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import BookingForm from './components/BookingForm'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate API call to fetch products
    const fetchProducts = async () => {
      try {
        setLoading(true)
        // Simulated data - in real app, this would be an API call
        const mockProducts = [
          {
            id: 1,
            name: "Mountain Bike Pro",
            type: "Mountain",
            pricePerHour: 5.00,
            image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            description: "Premium mountain bike with full suspension"
          },
          {
            id: 2,
            name: "Road Racer 500",
            type: "Road",
            pricePerHour: 4.50,
            image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            description: "Lightweight road bike for speed enthusiasts"
          },
          {
            id: 3,
            name: "City Cruiser",
            type: "City",
            pricePerHour: 3.50,
            image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            description: "Comfortable city bike with basket"
          },
          {
            id: 4,
            name: "Kids Bike Small",
            type: "Kids",
            pricePerHour: 2.50,
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            description: "Perfect for young riders"
          },
          {
            id: 5,
            name: "Hybrid Explorer",
            type: "Hybrid",
            pricePerHour: 4.00,
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            description: "Versatile bike for all terrains"
          },
          {
            id: 6,
            name: "Electric Cruiser",
            type: "Electric",
            pricePerHour: 6.00,
            image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
            description: "Eco-friendly electric bike"
          }
        ]

        setProducts(mockProducts)
        setLoading(false)
      } catch (err) {
        setError('Failed to load products')
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleBookNow = (product) => {
    setSelectedProduct(product)
    setShowBookingForm(true)
  }

  const handleBookingSubmit = (bookingData) => {
    console.log('Booking submitted:', {
      product: selectedProduct,
      ...bookingData
    })
    // Here you would typically send the booking data to your backend
    alert('Booking successful! We will contact you soon.')
    setShowBookingForm(false)
    setSelectedProduct(null)
  }

  const handleCloseBooking = () => {
    setShowBookingForm(false)
    setSelectedProduct(null)
  }

  if (loading) {
    return (
      <div className="container">
        <Header />
        <div className="loading">Loading products...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <Header />
        <div className="error">{error}</div>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <ProductList products={products} onBookNow={handleBookNow} />
      </div>
      {showBookingForm && selectedProduct && (
        <BookingForm
          product={selectedProduct}
          onSubmit={handleBookingSubmit}
          onClose={handleCloseBooking}
        />
      )}
      <Footer />
    </div>
  )
}

export default App
