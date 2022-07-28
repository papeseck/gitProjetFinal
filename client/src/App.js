import React from "react";
//import { Container } from 'react-bootstrap';
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import "./bootstrap.min.css";
import  Login from "./component/Auth/Login";
import Inscrire from "./component/Auth/Inscrire";
import Cart from "./component/cart/Cart";
import Panier from "./page/Panier";
import ShowProduit from "./component/ShowProduit";
import AddProduit from "./component/AddProduit";


const App = () => {
  //const { data, error, isLoading, isSuccess, isError } = useGetProductsQuery();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/show-produit/:id" element={<ShowProduit />} />
        <Route path="/connexion" element={<Login/>} />
        <Route path="/inscrire" element={<Inscrire/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/addproduit" element={<AddProduit/>} />
      </Routes>
    </>
  );
};

export default App;
