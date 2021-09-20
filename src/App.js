import {useEffect, useState} from 'react' 
import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const categories = [{id:1, name:"Electricas"},{id:2, name:"acusticas"},{id:3, name:"nylon"}]



const productos = [
  {nombre:"Guitarra", marca:"gibson", precio:100, id:1, categoryId:1},
  {nombre:"Bajo", marca:"fender", precio:150, id:2, categoryId:2},
  {nombre:"Acústica", marca:"yamaha", precio:200, id:3, categoryId:3}]

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
        

      <BrowserRouter>
      <header className="App-header">
         <NavBar products={productos} categories={categories}/>
        <h1>Bienvenidos a mi tienda de Guitarras!</h1>
        {gtrsList.length=== 0? <h3>Loading...</h3> :""}
      </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
        </Route>
        <Route exact path="/category/:id">
            <ItemListContainer/>
        </Route>
        <Route path="/item/:id">
           <ItemDetailContainer/>
        </Route>
        </Switch>

        </BrowserRouter>
    </div>
  );
}

export default App;
