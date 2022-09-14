//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route extact path="/" element={<ItemListContainer />}/>
        <Route extact path="/categoria/:condicion" element={<ItemListContainer />}/>
        <Route extact path="/producto/:id" element={<ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
