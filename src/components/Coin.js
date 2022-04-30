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
          <p className="coin-entry">₹{ask.toLocaleString("en-IN")}</p>
          <p className="coin-entry">₹{bid.toLocaleString("en-IN")}</p>
          <p className="green">{h24} ⬆</p>
          <p className="red">{l24} ⬇</p>
          {/* {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt cap:₹{marketCap.toLocaleString("en-IN")}{" "}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Coin;
