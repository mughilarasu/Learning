import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchContextProvider from "./context/SearchContext/SearchContextProvider";
import UserContextProvider from "./context/UserContext/UserContextProvider";
import { ThemeContextProvider } from "./context/ThemeContext/ThemeContext";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContext } from "./context/ThemeContext/ThemeContext";

export default function Layout() {
  const [themeMode, setThemeMode] = React.useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  const theme = createTheme({
    palette: {
      mode: themeMode === "dark" ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
          <UserContextProvider>
            <SearchContextProvider>
              <Header />
              <Outlet />
            </SearchContextProvider>
            <Footer />
          </UserContextProvider>
        </ThemeContextProvider>
      </ThemeProvider>
    </>
  );
}
