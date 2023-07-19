import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { CitiesProvider } from "./context/CitiesContext";

export default function App() {

  return <CitiesProvider>
    <BrowserRouter>
    <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="price" element={<Price/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="app" element={<AppLayout/>}>
          <Route index element={<Navigate replace to="cities"/>}/>
          <Route path="cities" element={<Cities/>}/>
          <Route path="cities/:id" element={<City/>}/>
          <Route path="countries" element={<Countries/>}/>
          <Route path="form" element={<Form/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
    </BrowserRouter>
</CitiesProvider>
}