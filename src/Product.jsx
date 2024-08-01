import React from 'react';

// Component to display individual product
function Product({ product, addToCart, removeFromCart, cartItems }) {
    const isInCart = cartItems.some((item) => item.id === product.id);
  
    return (
      <div className="card m-2" style={{ width: "12rem" }}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6>Rs {product.price.toFixed(2)}</h6>
          {isInCart ? (
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    );
  }
  
  export default Product;
  