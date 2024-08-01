import React from 'react';

// Component to display the cart items and total price
function Cart({ total, items, removeFromCart }) {
  return (
    <div>
      <ol className="list-group list-group-numbered">
        {items.length === 0 ? (
          <li className="list-group-item">No items in cart</li>
        ) : (
          items.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{item.name}</div>
                Rs {item.price.toFixed(2)}
              </div>
              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ol>
      <h1>Total: Rs {total.toFixed(2)}</h1>
    </div>
  );
}

export default Cart;
