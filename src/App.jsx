import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Homepage from "./pages/Homepage";
import Price from "./pages/Price";
import PageNotFound from "./pages/PageNotFount";
import AppLayout from "./pages/AppLayout";
import "./index.css";
import Login from "./pages/Login";


export default function App() {
  return <BrowserRouter>
  <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="product" element={<Product/>}></Route>
      <Route path="price" element={<Price/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="app" element={<AppLayout/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
  </Routes>
</BrowserRouter>
}