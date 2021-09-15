import {useEffect, useState} from 'react' 
import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';




const productos = [
  {nombre:"guitarra", marca:"gibson", precio:100, id:1},
  {nombre:"bajo", marca:"fender", precio:150, id:2},
  {nombre:"guitarra", marca:"yamaha", precio:200, id:3}]

  function getList (){

    return new Promise ((resolve,reject)=>{
     setTimeout(()=>resolve(productos),2000) 

    })
  }
  
   

function App() {

  const [view, setView] = useState (true)

  const[gtrsList, setGtrsList] = useState([])


  useEffect(()=>{
    const list= getList()

    list.then(instr=>setGtrsList(instr))
  },[])

  


  return (
  
  
    <div className="App">
      <header className="App-header">
        {view? <NavBar/>: <h1>Se oculto el NavBar</h1>}<hr/>
        <h1>Bienvenidos a mi tienda de Guitarras!</h1>
        <button onClick={()=>setView(!view)}>Mostrar navbar?</button>
         {/* <h1 >{count}</h1> */}
      </header>
        <ItemListContainer/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
