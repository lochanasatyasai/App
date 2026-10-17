import React, { useState } from 'react';

import './App.css';

const App = () => {
  const products = [
    { id: 1, name: 'T-Shirt', price: 299 },
    { id: 2, name: 'Jeans', price: 799 },
    { id: 3, name: 'Sneakers', price: 1299 },
    { id: 4, name: 'Sweaters', price: 1099 },
  ];

  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const newItem = {
      ...product,
      cartItemId: Date.now() + Math.random(),
    };

    setCart((prev) => [...prev, newItem]);
  };

  // Delete product from cart
  const removeFromCart = (cartItemId) => {
    setCart((prev) =>
      prev.filter((item) => item.cartItemId !== cartItemId)
    );
  };

  return (
    <div className="cart-container">
  

      <h1>🛍️ Product List</h1>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>🛒 Your Cart ({cart.length} items)</h2>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.cartItemId}
              className="cart-item"
            >
              {item.name} - ₹{item.price}

              <button
                onClick={() => removeFromCart(item.cartItemId)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;