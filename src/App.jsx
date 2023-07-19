import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/product";
import Homepage from "./pages/Homepage";
import Price from "./pages/Price";
import PageNotFound from "./pages/PageNotFount";
import AppLayout from "./pages/AppLayout";
import "./index.css";
import Login from "./pages/Login";
import Cities from "./components/Cities";
import Countries from "./components/Countries";
import City from "./components/City";
import Form from "./components/Form";

export default function App() {

  return <BrowserRouter>
  <Routes>
      <Route index element={<Homepage/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="price" element={<Price/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="app" element={<AppLayout/>}>
        <Route index element={<Navigate replace to="cities"/>}/>
        <Route path="cities" element={<Cities cityList={cityList} isLoading={isLoading}/>}/>
        <Route path="cities/:id" element={<City cityList={cityList}/>}/>
        <Route path="countries" element={<Countries cityList={cityList} isLoading={isLoading}/>}/>
        <Route path="form" element={<Form/>}/>
     </Route>
      <Route path="*" element={<PageNotFound/>}/>
  </Routes>
</BrowserRouter>
}