//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Provider  from './components/Context/Context';
import Cart from './components/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
  
  return (
          <Provider>
            <BrowserRouter>
            <Header/>
            <Routes>
              <Route extact path="/" element={<ItemListContainer />}/>
              <Route extact path="/categoria/:condicion" element={<ItemListContainer />}/>
              <Route extact path="/producto/:id" element={<ItemDetailContainer />}/>
              <Route extact path='/cart' element={<Cart/>}/>
              <Route extact path='/checkout' element={<Checkout/>}/>
            </Routes>
            </BrowserRouter> 
          </Provider>  
  );
}

export default App;
