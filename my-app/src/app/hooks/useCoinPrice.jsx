import { useState, useEffect } from "react";
import axios from "axios";

const API_ORIGINS_URL = "https://api.allorigins.win/get?url=";
const COINGECKO_API_URL = "https://api.coingecko.com/api/v3/coins";
const COIN_NAME = "usd";

const useCoinPrice = () => {
  const [priceInEuros, setPriceInEuros] = useState(null);

  const fetchCoinData = async () => {
    try {
      const response = await axios.get(
        `${API_ORIGINS_URL}${COINGECKO_API_URL}/${COIN_NAME}`,
      );
      const coinData = response.data.contents;
      const marketData = JSON.parse(coinData).market_data;
      const price = marketData.current_price.usd;
      setPriceInEuros(price);
    } catch (err) {
      console.error(err.message);
    }
  };
  fetchCoinData();
  useEffect(() => {
    const interval = setInterval(() => {
      fetchCoinData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return priceInEuros;
};

export default useCoinPrice;
