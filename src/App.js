import logo from './logo.svg';
import './App.css';



function App() {
 
  const array = [
    {nombre:"mateo", edad:"25"},
    {nombre : "edu", edad : "90"},
    {nombre : "marcos", edad : "50"},
    {nombre: "miguel", edad : "90"}
  ]
  const numeros =[1,2,3]
  const nuevoNumero = numeros.map(elemento =>elemento*2)
  console.log (nuevoNumero)
  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
