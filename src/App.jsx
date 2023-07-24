import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import Cities from "./components/Cities";
import Countries from "./components/Countries";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./context/CitiesContext";
import LoaderPage from "./components/LoaderPage";

const Homepage = lazy(() =>import("./pages/Homepage"));
const Product = lazy(() =>import("./pages/Product"));
const Price = lazy(() =>import("./pages/Price"));
const PageNotFound = lazy(() =>import("./pages/PageNotFound"));
const AppLayout = lazy(() =>import("./pages/AppLayout"));
const Login = lazy(() =>import("./pages/Login"));

export default function App() {

  return <CitiesProvider>
    <BrowserRouter>
      <Suspense fallback={<LoaderPage/>}>
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
      </Suspense>
    </BrowserRouter>
</CitiesProvider>
}