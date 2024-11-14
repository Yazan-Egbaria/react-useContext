import { createContext, useState } from "react";

const GiftArray = createContext();

const GiftArrayProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);
  return (
    <GiftArray.Provider value={{ gifts, setGifts }}>
      {children}
    </GiftArray.Provider>
  );
};

export { GiftArrayProvider, GiftArray };
