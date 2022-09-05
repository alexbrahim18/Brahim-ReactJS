//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  const productos = [ {id:1,nombre:"Producto 1", precio:100, stock:10},
                      {id:2,nombre:"Producto 2", precio:200, stock:5},
                      {id:3,nombre:"Producto 3", precio:300, stock :0}];
  
  return (
    <div>
      <Header/>
      <ItemListContainer greeting= {productos} />
      <ItemCount stock={5} initial={1} onAdd ={0} />
    </div>
  );
}

export default App;
