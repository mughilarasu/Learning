import React, { startTransition, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import { Button, Typography } from "@mui/material";
import { githubInfoLoader } from "./components/Github/Github.jsx";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useScreenTheme, {
  ThemeContext,
} from "./context/ThemeContext/ThemeContext";
import Login from "./components/Login/Login";

let CurrencyConverter;
let PasswordGenerator;
let PhotoAlbum;
let FullScreenImage;
let Todo;

let Home;
let Github;
try {
  startTransition(() => {
    // Attempt to dynamically import the CurrencyConverter and PasswordGenerator modules
    CurrencyConverter = React.lazy(() => import("currency_converter/App"));
    PasswordGenerator = React.lazy(() => import("password_generator/App"));
    PhotoAlbum = React.lazy(() => import("photo_album/App"));
    FullScreenImage = React.lazy(() => import("photo_album/FullScreenImage"));
    Todo = React.lazy(() => import("todo/App"));
    Home = React.lazy(() => import("./components/Home/Home.jsx"));
    Github = React.lazy(() => import("./components/Github/Github.jsx"));
  });
} catch (error) {
  console.error("Failed to load remote modules:", error);
  // Handle the error gracefully, e.g., display a fallback UI or log the error
}
const LoadingIndicator = () => {
  const screenTheme = useScreenTheme();
  return (
    <Typography
      variant="h3"
      style={{
        textAlign: "center",
      }}
    >
      ...loading
    </Typography>
  );
};
const NotFound = () => {
  const screenTheme = useScreenTheme();
  return (
    <Typography
      variant="h3"
      style={{
        textAlign: "center",
      }}
    >
      Page Not Found
      <br />
      <Button component={Link} style={{ margin: "8px" }} to="/">
        go to home
      </Button>
    </Typography>
  );
};
const AppIsDown = () => {
  const screenTheme = useScreenTheme();
  return (
    <Typography
      variant="h3"
      style={{
        textAlign: "center",
      }}
    >
      The Requested App is Down
    </Typography>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="login" element={<App component={<Login />} />} />
      <Route
        path=""
        errorElement={<App component={<AppIsDown />} />}
        element={
          <App
            component={
              Home ? (
                <Suspense fallback={<LoadingIndicator />}>
                  <Home />
                </Suspense>
              ) : (
                <AppIsDown />
              )
            }
          />
        }
      />
      <Route
        path="currency_converter"
        errorElement={<App component={<AppIsDown />} />}
        element={
          <App
            component={
              CurrencyConverter ? (
                <Suspense fallback={<LoadingIndicator />}>
                  <CurrencyConverter />
                </Suspense>
              ) : (
                <AppIsDown />
              )
            }
          />
        }
      />
      <Route
        path="password_generator"
        errorElement={<App component={<AppIsDown />} />}
        element={
          <App
            component={
              PasswordGenerator ? (
                <Suspense fallback={<LoadingIndicator />}>
                  <PasswordGenerator />
                </Suspense>
              ) : (
                <AppIsDown />
              )
            }
          />
        }
      />
      <Route
        path="photo_album"
        errorElement={<App component={<AppIsDown />} />}
        element={
          <App
            component={
              PhotoAlbum ? (
                <Suspense fallback={<LoadingIndicator />}>
                  <PhotoAlbum />
                </Suspense>
              ) : (
                <AppIsDown />
              )
            }
          />
        }
      />
      <Route
        path="photo_album/:imgId"
        errorElement={<App component={<AppIsDown />} />}
        element={
          <App
            component={
              FullScreenImage ? (
                <Suspense fallback={<LoadingIndicator />}>
                  <FullScreenImage />
                </Suspense>
              ) : (
                <AppIsDown />
              )
            }
          />
        }
      />
      <Route
        path="todo"
        errorElement={<App component={<AppIsDown />} />}
        element={
          <App
            component={
              Todo ? (
                <Suspense fallback={<LoadingIndicator />}>
                  <Todo />
                </Suspense>
              ) : (
                <AppIsDown />
              )
            }
          />
        }
      />
      <Route
        path="github"
        loader={githubInfoLoader}
        errorElement={<App component={<AppIsDown />} />}
        element={
          <App
            component={
              Github ? (
                <Suspense fallback={<LoadingIndicator />}>
                  <Github />
                </Suspense>
              ) : (
                <AppIsDown />
              )
            }
          />
        }
      />

      <Route path="*" element={<App component={<NotFound />} />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
