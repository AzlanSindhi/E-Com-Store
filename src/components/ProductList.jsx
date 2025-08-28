import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, onBookNow }) => {
  return (
    <section id="products">
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', color: '#333' }}>
        Available Products
      </h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onBookNow={onBookNow}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList
