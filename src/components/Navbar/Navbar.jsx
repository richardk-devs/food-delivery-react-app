import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo/logo.jpg";
import basket from "../../assets/images/ui/basket.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { getTotalCartAmount, cart } = useContext(StoreContext);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="Food App Logo" className="logo" />
        </Link>

        <ul className="navbar-menu">
          <li>
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="#explore-menu"
              onClick={() => setMenu("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </a>
          </li>

          <li>
            <a
              href="#mobile-app"
              onClick={() => setMenu("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              Mobile App
            </a>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={() => setMenu("contact-us")}
              className={menu === "contact-us" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="navbar-right">
          <div className="navbar-cart-icon">
            <Link to="/cart">
              <img src={basket} alt="basket" width="30" />
            </Link>
            {totalItems > 0 ? (
              <span className="cart-count">{totalItems}</span>
            ) : (
              ""
            )}
          </div>

          <button className="signin-btn" onClick={() => setShowLogin(true)}>
            Sign in
          </button>

          <div className="hamburger" onClick={toggleDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`drawer ${drawerOpen ? "active" : ""}`}>
        <ul>
          <Link
            to="/"
            onClick={() => {
              setMenu("home");
              toggleDrawer();
            }}
          >
            {" "}
            Home
          </Link>
          <li>
            {" "}
            <a
              href="#explore-menu"
              onClick={() => {
                setMenu("menu");
                toggleDrawer();
              }}
            >
              {" "}
              Menu{" "}
            </a>
          </li>
          <li>
            {" "}
            <a
              href="#mobile-app"
              onClick={() => {
                setMenu("mobile-app");
                toggleDrawer();
              }}
            >
              {" "}
              Mobile App{" "}
            </a>
          </li>
          <Link
            to="/contact"
            onClick={() => {
              setMenu("contact-us");
              toggleDrawer();
            }}
          >
            {" "}
            Contact Us{" "}
          </Link>
        </ul>
      </div>

      {drawerOpen && (
        <div className="drawer-overlay" onClick={toggleDrawer}></div>
      )}
    </>
  );
};

export default Navbar;
