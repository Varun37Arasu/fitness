// RefContext.js
import { createContext, useContext, useRef } from "react";

const RefContext = createContext();

export const RefProvider = ({ children }) => {
  const refs = {
    homeRef: useRef(),
    aboutRef: useRef(),
    wedoRef: useRef(),
    ssRef: useRef(),
  };

  return <RefContext.Provider value={refs}>{children}</RefContext.Provider>;
};

export const useRefs = () => {
  return useContext(RefContext);
};
