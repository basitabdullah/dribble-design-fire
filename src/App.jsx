import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./components/users/List";
import New from "./components/new/New";
import Product from "./pages/product/Product";
import NewUser from "./components/newUser/NewUser";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<List />} />
        <Route path="/products" element={<Product />} />
        <Route path="/users/:id" element={<New/>} />
        <Route path="/newUser" element={<NewUser/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
