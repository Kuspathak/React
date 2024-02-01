import React, { useState } from 'react'
import Product from './Products/Product';
import Sidebar from './Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import { ProductProvider } from './context/ProductConetxt';
import Header from "./Navbar/Header";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './component/Contact';
import ProductDetails from './Products/ProductDetails';

const App = () => {
  return (
    <>
    <Router>
    <ProductProvider>
      
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
       
      </Routes>
      </ProductProvider>
      </Router>
      </>
  )
}

export default App