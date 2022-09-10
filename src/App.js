//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const productos = [ 
    {id:1,nombre:"HUBBSI - IPA", precio:200, stock:5,img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/hubbsi11-8479febb3cf9b5da9615972491316014-640-0.jpg",descripcion:"Si te dicen que sos un amargo por tomar nuestra Hubbsi India Pale Ale entonces están en lo correcto. Una dulce amargura cítrica de lúpulos norteamericanos que encantan hasta al más criollo. Un toque de amargor frutado para los paladares más exigentes. En Leben Brewing hacemos cerveza fácil de tomar. Sin atajos.",ibu:"50",alc:"5.5%"},
    {id:2,nombre:"MOSAIC - LIGHT LAGGER", precio:200, stock:5,img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/mosaic11-ddc5a636884f48f81715972491560753-640-0.jpg"},
    {id:3,nombre:"VAINILLA PORTER", precio:300, stock :0,img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/lata-vanilla1-7fed38b963122e76b116092724750193-640-0.jpg"},
    {id:4,nombre:"HONEY", precio:400, stock:15,img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/honey11-f6c9e8c27b1ca19b5b15994876402928-640-0.jpg"},
    {id:5,nombre:"TUQUE A.A.A.", precio:100, stock:10, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/lata-tuque1-3ea973e0262f0ef31516092667678466-1024-10241-bc3c713059df46852c16092722783430-640-0.jpg"},
    {id:6,nombre:"LADY G - AMBER LAGGER", precio:100, stock:10, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/ladyg1-3eee6a3cba91ea1e7a15972490885174-640-0.jpg"},
    {id:7,nombre:"TIBAU - PILSNER", precio:100, stock:10, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/tibau1-a29428cb71d69155b415972491058453-1024-1024.jpg"},
    {id:8,nombre:"SIX PACK VARIADO", precio:100, stock:10, img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/193/297/products/lata-variado-x611-4398bd07cc763111ca16111451800040-1024-1024.jpg"},];
  
  return (
    <div>
      <Header/>
      <ItemListContainer productos={productos}/>
      <ItemDetailContainer productos={productos}/>
    </div>
  );
}

export default App;
