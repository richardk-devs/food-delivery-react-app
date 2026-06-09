import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import "./FoodDisplay.css";

function FoodDisplay() {
  const { food_list, cart, addToCart, removeFromCart } = useContext(StoreContext);

  const getQuantity = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="food-display">
      <h1>Top Dishes</h1>
      <div className="food-grid">
        {food_list.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="food-info">
              <h3>{item.name}</h3>
              <p className="category">{item.category}</p>
              <p className="description">{item.description}</p>
              <div className="bottom-row">
                <span className="rating">⭐ {item.rating}</span>
                <span className="price">₹{item.price}</span>
              </div>

             
              <div className="quantity-controls">
                <button className="minus" onClick={() => removeFromCart(item)}>-</button>
                <span className="quantity">{getQuantity(item.id)}</span>
                <button className="plus" onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;

