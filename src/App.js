import {useState} from 'react'
import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer';



function App() {
  const [count, setCount] = useState(0)

 const miFuncionRestar = () => {
   if (count<=0) {
     setCount(0)}
     else {setCount(count -1)}
   
 }
  

    
      
    

  return (
  
  
    <div className="App">
      <header className="App-header">
        <h1>Bienvenidos a mi tienda de Guitarras!</h1>
        <NavBar/><hr/>
         <h1 >{count}</h1>
        <ItemListContainer greeting="Este es mi ItemListContainer"/>
        <button onClick={() => setCount(count+1)}>Añadir al carrito</button>
        <button onClick ={miFuncionRestar}> Sacar del carrito</button>
        {count <= 0 && <h3>El contador es 0!</h3> } 
        

        
        
        
      </header>
    </div>
  );
}

export default App;
