import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">Farm Basket</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            {/* <li><a href="#about">About Us</a></li> */}
            {/* <li><a href="#contact">Contact</a></li> */}
            <li><a href="#cart">Cart</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
