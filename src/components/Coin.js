import React from "react";
import "../Coin.css";

const Coin = ({
  name,
  marketName,
  baseCurrency,
  ask,
  bid,
  h24,
  l24,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <h1>{name}</h1>
          <h1>{marketName}</h1>
          <h1>{baseCurrency}</h1>
        </div>
        <div className="coin-data">
          <p className="coin-entry">₹{ask}</p>
          <p className="coin-entry">₹{bid}</p>
          <p className="green">{h24} ⬆</p>
          <p className="red">{l24} ⬇</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
