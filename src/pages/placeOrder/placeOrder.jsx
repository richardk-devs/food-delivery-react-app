import React, { useContext } from "react";
import "./placeOrder.css";
import { StoreContext } from "../../context/storeContext";

const PlaceOrder = () => {
  const { cart, getTotalCartAmount } = useContext(StoreContext);

  const deliveryFee = cart.length > 0 ? 40 : 0;
  const subtotal = getTotalCartAmount();
  const total = subtotal + deliveryFee;

  return (
    <div className="place-order">
      <h1 className="page-title">Place Your Order</h1>

      <div className="order-container">

        <div className="order-left">
          <h2>Delivery Details</h2>

          <form className="delivery-form">
            <input type="text" placeholder="Full Name" required />
            <input type="text" placeholder="Mobile Number" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="House No. / Street" required />
            <input type="text" placeholder="City" required />
            <input type="text" placeholder="State" required />
            <input type="text" placeholder="Pincode" required />
          </form>
        </div>

        <div className="order-right">
          <h2>Order Summary</h2>

          <div className="summary-list">
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <div className="price-box">
            <div className="price-row">
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="price-row">
              <span>Delivery Fee:</span>
              <span>₹{deliveryFee}</span>
            </div>

            <hr />

            <div className="price-row total">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </div>

          <button className="checkout-btn">Place Order</button>
        </div>

      </div>
    </div>
  );
};

export default PlaceOrder;
