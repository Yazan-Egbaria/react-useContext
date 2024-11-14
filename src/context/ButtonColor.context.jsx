import { createContext, useState } from "react";

const ButtonColorContext = createContext();

const ButtonColorProvider = ({ children }) => {
  const [mode, setMode] = useState("bg-white");
  return (
    <ButtonColorContext.Provider value={{ mode, setMode }}>
      {children}
    </ButtonColorContext.Provider>
  );
};

export { ButtonColorContext, ButtonColorProvider };
