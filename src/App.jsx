import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./components/users/List";
import New from "./components/new/New";
import Product from "./pages/product/Product";
import NewUser from "./components/newUser/NewUser";
import Login from "./pages/login/Login";
const App = () => {
  const currUser = true;
  const UserAuth = ({ children }) => {
    return currUser ? children : <Navigate to="/login" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UserAuth>
              <Home />
            </UserAuth>
          }
        />

        <Route
          path="/users"
          element={
            <UserAuth>
              <List />
            </UserAuth>
          }
        />

        <Route
          path="/products"
          element={
            <UserAuth>
              <Product />
            </UserAuth>
          }
        />

        <Route
          path="/users/:id"
          element={
            <UserAuth>
              <New />
            </UserAuth>
          }
        />
        <Route
          path="/newUser"
          element={
            <UserAuth>
              <NewUser />
            </UserAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
