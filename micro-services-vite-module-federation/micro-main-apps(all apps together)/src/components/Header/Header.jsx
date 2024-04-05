import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useNavigate } from "react-router-dom";
import { screens } from "../../../Utils";
import {
  ArrowBackIos,
  GitHub,
  DarkMode,
  LightMode,
  Logout,
} from "@mui/icons-material";
import SearchContext from "../../context/SearchContext/SearchContext";
import useScreenTheme from "../../context/ThemeContext/ThemeContext";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const location = useLocation();
  const theme = useScreenTheme();
  console.log("theme");
  const urls = screens.map((screen) => screen.url).includes(location.pathname);
  const { setSearch } = React.useContext(SearchContext);
  const navigate = useNavigate();
  const isHome = location.pathname === "/" || location.pathname === "/Home";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {(urls || location.pathname === "/github") && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="Go Back"
              sx={{ mr: 2 }}
              onClick={() => navigate(-1)}
            >
              <ArrowBackIos />
            </IconButton>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MICRO APPS
          </Typography>
          {isHome && (
            <>
              <Box sx={{ margin: "0px 24px" }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    onChange={(e) => setSearch(e.target.value)}
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
              {theme.themeMode === "light" ? (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="Light Mode"
                  sx={{ mr: 2 }}
                  title="Light Mode"
                  onClick={() => theme.darkTheme()}
                >
                  <LightMode />
                </IconButton>
              ) : (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="Light Mode"
                  sx={{ mr: 2 }}
                  title="Dark Mode"
                  onClick={() => theme.lightTheme()}
                >
                  <DarkMode />
                </IconButton>
              )}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="View My Github"
                sx={{ mr: 2 }}
                onClick={() => navigate("/github")}
                title="View My Github"
              >
                <GitHub />
              </IconButton>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="Logout"
                sx={{ mr: 2 }}
                onClick={() => navigate("/login")}
                title="Logout"
              >
                <Logout />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
