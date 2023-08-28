import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbarlayout from './components/Navbarlayout';
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Deletecartproduct from "./components/Deletecartproduct";
import Updateproduct from "./components/Updateproduct";
import Login from "./components/Login";
import Formdet from "./components/Formdet";




function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbarlayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/deletecartproduct/:id" element={<Deletecartproduct/>}/>
          <Route path="/updateproduct/:id" element={<Updateproduct/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/login/formdet" element={<Formdet/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
