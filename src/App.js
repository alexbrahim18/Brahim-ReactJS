//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Nav/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const productos = [ {id:1,nombre:"Producto 1", precio:100},{id:2,nombre:"Producto 2", precio:200},{id:3,nombre:"Producto 3", precio:300}];
  
  return (
    <div>
      <Header/>
      <ItemListContainer greeting= {productos} />
    </div>
  );
}

export default App;
