import React from 'react'

const ProductCard = ({ product, onBookNow }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
        }}
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-type">Type: {product.type}</p>
      <p className="product-price">₹{product.pricePerHour}/hour</p>
      <p style={{ color: '#666', marginBottom: '1rem' }}>{product.description}</p>
      <button
        className="btn"
        onClick={() => onBookNow(product)}
        style={{ width: '100%' }}
      >
        Book Now
      </button>
    </div>
  )
}

export default ProductCard
