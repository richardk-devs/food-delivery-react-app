import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/storeContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(StoreContext);

  const navigate=useNavigate();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const DELIVERY_FEE = 40;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const total = subtotal - discount + DELIVERY_FEE;

  const applyCoupon = () => {
    if (coupon === "FOOD20") {
      setDiscount(subtotal * 0.2);
      alert("Coupon Applied: 20% OFF");
    } else {
      alert("Invalid Coupon Code");
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty">Your cart is empty 🛒</p>
      ) : (
        <>
        <div className="cart-table-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Details</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-img" />
                  </td>

                  <td>
                    <h4>{item.name}</h4>
                    <p className="desc">{item.description}</p>
                  </td>

                  <td>₹{item.price}</td>

                  <td>
                    <div className="qty-buttons">
                      <button onClick={() => removeFromCart(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                  </td>

                  <td>₹{item.price * item.quantity}</td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => removeFromCart({ ...item, quantity: 1 })}
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

        
          <div className="cart-summary-box">
            <h3>Price Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₹{DELIVERY_FEE}</span>
            </div>

            <div className="summary-row">
              <span>Discount</span>
              <span>- ₹{discount.toFixed(0)}</span>
            </div>

            <hr />

            <div className="summary-total">
              <strong>Total</strong>
              <strong>₹{total.toFixed(0)}</strong>
            </div>

           
            <div className="coupon-box">
              <input
                type="text"
                placeholder="Enter coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button onClick={applyCoupon}>Apply</button>
            </div>

            <button onClick={()=>navigate('/order')} className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
