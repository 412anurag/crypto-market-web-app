import "./App.css";
import "./Coin.css";
import axios from "axios";
import Header from "./components/Header";
import Coin from "./components/Coin";
import React, { useState, useEffect } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.buyucoin.com/ticker/v1.0/liveData"
      )
      .then((res) => {
        setCoins(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.currToName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search Cryptocurrency</h1>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
      </div>
    
      {filteredCoins.length===0?
      <h1 className="coin-not-found">NO RESULT FOUND</h1>:
      <Header
       head1="Name"
       head2="Market Name"
       head3="Base Currency"
       head4="Ask Value"
       head5="Bid Value"
       head6="24hr ⬆"
       head7="24hr ⬇"
      />
       }    
      
      {filteredCoins.map((coin,id) => {
        return (
          <Coin
            key={id}
            name={coin.currToName}
            marketName={coin.marketName}
            baseCurrency={coin.baseCurrency}
            ask={coin.ask}
            bid={coin.bid}
            h24={coin.h24}
            l24={coin.l24}
          />
        );
      })}

      
    </div>
  );
}

export default App;