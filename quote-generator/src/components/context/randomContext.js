import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const RandomProvider = ({ children }) => {
  const [random, setRandom] = useState(null);
  const [loading, setLoading] = useState(false);
  const getRandomQuote = async () => {
    try {
      setLoading(true);
      const getApi = await fetch(
        "https://quote-garden.herokuapp.com/api/v2/quotes/random"
      );
      const toJson = await getApi.json();
      setRandom(toJson);
    } catch (err) {
      setLoading(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider value={{ random, getRandomQuote, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
