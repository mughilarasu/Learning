import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useScreenTheme() {
  return useContext(ThemeContext);
}
