import {useEffect, useState} from 'react' 
import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {

  const [view, setView] = useState (true)



  

  return (
  
  
    <div className="App">
      <header className="App-header">
        
        {view? <NavBar/>: <h1>Se oculto el NavBar</h1>}<hr/>
        <h1>Bienvenidos a mi tienda de Guitarras!</h1>
        <button onClick={()=>setView(!view)}>Mostrar navbar?</button>
         {/* <h1 >{count}</h1> */}
         </header>
        <ItemListContainer greeting="Este es mi ItemListContainer"/>
        {/* <button onClick={() => setCount(count+1)}>Añadir al carrito</button>
        <button onClick ={miFuncionRestar}> Sacar del carrito</button>
        {count <= 0 && <h3>El contador es 0!</h3> }  */}
        
        
        
        
        

        
        
        
      
    </div>
  );
}

export default App;
