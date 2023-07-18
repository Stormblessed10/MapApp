import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const URL = "http://localhost:9000/cities";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    async function getData() {
        try {
            setIsLoading(true);
            const res = await fetch(URL);
            const data = await res.json();
            setCityList(data);
            setIsLoading(false);
        } catch(err) {
            console.error(err);
        }
    }
    getData();
}, []);

  return <BrowserRouter>
  <Routes>
      <Route index element={<Homepage/>}></Route>
      <Route path="product" element={<Product/>}></Route>
      <Route path="price" element={<Price/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="app" element={<AppLayout/>}>
        <Route index element={<p>list</p> }></Route>
        <Route path="cities" element={<Cities cityList={cityList} isLoading={isLoading}/>}></Route>
        <Route path="countries" element={<Countries cityList={cityList} isLoading={isLoading}/>}></Route>
      </Route>
      <Route path="*" element={<PageNotFound/>}></Route>
  </Routes>
</BrowserRouter>
}