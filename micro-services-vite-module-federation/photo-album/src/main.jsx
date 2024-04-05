import React, { startTransition, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Button } from "@mui/material";
import App from "./App.jsx";

let FullScreenImage;
try {
  startTransition(() => {
    // Attempt to dynamically import the CurrencyConverter and PasswordGenerator modules
    FullScreenImage = React.lazy(() => import("./FullScreenImage.jsx"));
  });
} catch (error) {
  console.error("Failed to load remote modules:", error);
  // Handle the error gracefully, e.g., display a fallback UI or log the error
}

const LoadingIndicator = () => {
  return <h3 style={{ textAlign: "center" }}>...loading</h3>;
};
const NotFound = () => {
  return (
    <h3 style={{ textAlign: "center" }}>
      Requested Image Not Found
      <br />
      <Button component={Link} style={{ margin: "8px" }} to="/">
        go to home
      </Button>
    </h3>
  );
};
const AppIsDown = () => {
  return (
    <h3 style={{ textAlign: "center" }}>
      Error Occured
      <br />
      <Button component={Link} style={{ margin: "8px" }} to="/">
        go to home
      </Button>
    </h3>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" errorElement={<AppIsDown />} element={<App />} />
      <Route
        path="photo_album/:imgId"
        errorElement={<AppIsDown />}
        element={
          <Suspense fallback={<LoadingIndicator />}>
            <FullScreenImage />
          </Suspense>
        }
      />
      <Route
        path="Not-Found"
        errorElement={<AppIsDown />}
        element={<NotFound />}
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
