import { useState } from "react";
import "./itemCounter.css"

const Counter = ({initial, stock,}) => {

    const [count,setCount] = useState(initial);
    
    if (count >= initial && count <=stock){
        console.log("no pasa nada")}
    
        else if (count <= initial) {setCount(initial)}

        else {setCount(stock)}


  const [message,setMessage] = useState("");

        if(count>stock) {
          setMessage("Nuestro stock es de 25!")
        }
      

      



return (<div class="input-group mb-3" id="divCounter">

    <form id="form">
 
    <label>{message}</label>
    <input type="number" class="form-control" aria-label="Example text with two button addons" max= {stock} min={initial} value={count}/>
    <button class="btn btn-primary" type="button" onClick={()=>setCount(count-1)}>-</button>
    <button class="btn btn-primary" type="button" onClick= {()=>setCount(count+1)}>+</button>
    <button type="submit" style={{margin: 8}}>Comprar</button>
    </form>
</div>

);
    

}

export default Counter;
/*     <div>
        
        <div>{count}</div>
            
    <button class="btn btn-primary" type="button" onClick={()=> setCount(count+1)}>+</button>
    <button class="btn btn-primary" type="button" onClick= {()=> setCount(count-1)} >-</button>

    </div>

);
 */




/* const lista = [
    {id:'1', name:'Remera', description:'Remera nike', stock:'5'},
    {id:'2', name:'Pantalon', description:'Pantalon adidas', stock:'10'},
    {id:'3', name:'Zapatillas', description:'Zapas puma', stock:'8'}
]

function getList (){
  return new Promise ((resolve, reject) =>{
    setTimeout(()=> resolve(lista), 3000)
  })
}

function findFood(what){
  const list = getList()
  
  list.then(list =>{
    console.log(list)
  }, err =>{
    console.log(err)
  }).catch(reason => console.log(reason))
}

findFood('lista')
 */