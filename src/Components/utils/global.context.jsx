import { createContext, useContext, useReducer, useState } from "react";

export const initialThemeState = {theme: "light", color: "light"};
const initialDentistState = [];

export const ContextGlobal = createContext();

const themeReducer = (state, action) => {console.log("state",state);
  switch (action.type) {
    case "SET_LIGHT":
      return { ...state, theme:"light", color: "light" };
    case "SET_DARK":
      return { ...state, theme:"dark", color: "dark" };
    default:
      return state;
  }
};


export const ContextGlobalProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentists, setDentists] = useState(initialDentistState);
  const [theme, dispatchTheme] = useReducer(themeReducer, initialThemeState);

  const elementsValue = {
    dentists,
    setDentists,
    theme,
    dispatchTheme,
  };

  return (
    <ContextGlobal.Provider value={elementsValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

// export default ContextGlobalProvider;
export const useContextGlobal = () => useContext(ContextGlobal);
