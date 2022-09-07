//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  
  
  return (
    <div>
      <Header/>
      <ItemListContainer/>
      <ItemCount stock={5} initial={1} onAdd ={0} />
    </div>
  );
}

export default App;
