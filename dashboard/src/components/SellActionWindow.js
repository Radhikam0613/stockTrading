import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // same styling

const SellActionWindow = ({ uid, userHoldings = [] }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // FIX: useContext (BuyActionWindow is wrong but works accidentally)
  const { closeSellWindow } = useContext(GeneralContext);

  // Find how many stocks user owns for this UID
  const userOwnedQty =
    userHoldings.find((item) => item.name === uid)?.qty || 0;

  const handleSellClick = () => {
    // ❗Check if user is allowed to sell
    if (userOwnedQty === 0) {
      alert("You do not own this stock. Sell is not allowed.");
      return;
    }

    if (stockQuantity > userOwnedQty) {
      alert(`You only own ${userOwnedQty} units. Cannot sell more.`);
      return;
    }

    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          You own: {userOwnedQty} units
        </span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link className="btn btn-grey" onClick={closeSellWindow}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
