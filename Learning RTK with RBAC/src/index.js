import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { fetchUsers } from "./features/users/usersSlice";
import { fetchPosts } from "./features/posts/postsSlice";
import { apiSlice } from "./features/api/apiSlice";
store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ApiProvider api={apiSlice}> */}
        <Provider store={store}>
          <AuthProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthProvider>
        </Provider>
      {/* </ApiProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
