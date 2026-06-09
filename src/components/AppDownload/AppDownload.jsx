import React from "react";
import "./AppDownload.css";
import playstore from "../../assets/images/ui/playstore.jpg";
import appstore from "../../assets/images/ui/appstore.png";


const AppDownload = () => {
  return (
    <div className="app-download" id="mobile-app">
      <div className="app-content">
        <h2>Download Our Mobile App</h2>
        <p>
          Order your favorite food with just a click! Get discounts, track orders,
          and enjoy fast delivery using our mobile app.
        </p>

        <div className="app-buttons">
          <a href="#" className="store-btn">
            <img src={playstore} alt="Google Play" />
          </a>

          <a href="#" className="store-btn">
            <img src={appstore} alt="App Store" />
          </a>
        </div>
      </div>

    </div>
  );
};

export default AppDownload;
