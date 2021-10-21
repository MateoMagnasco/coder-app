
import './App.css';
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext/CartContext';
import Cart from './components/Cart/Cart';







   
function App() {

  return (
  <div className="App" >
    <CartContextProvider>
     <BrowserRouter>
      <header className="App-header">
         <NavBar/>
        <h1>Bienvenidos a mi tienda de Guitarras!</h1>

      </header>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
        </Route>
        <Route exact path="/category/:categoryId">
            <ItemListContainer/>
        </Route>
        <Route path="/item/:id">
           <ItemDetailContainer />
        </Route>
        <Route path='/cart' >
            <Cart />
        </Route>
        </Switch>
        </BrowserRouter>
        </CartContextProvider>
        

    </div>
  );
}

export default App;
