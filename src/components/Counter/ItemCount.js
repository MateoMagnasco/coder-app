import { useState } from "react";
import "./itemCounter.css"

const Counter = ({initial, stock,setCount, setAdded}) => {
  const [quantity, setQuantity] = useState(0)

  const onAdd = () =>{
    if(quantity< stock) {
      setQuantity(quantity +1)
    }
  }

  const onRemove = () =>{
    if(quantity>= initial) {
      setQuantity(quantity -1)
    }
  }
   
  const onAddCart = () =>{
    setCount(quantity)
    setQuantity(0)
    setAdded (true)

  }
      

      



return (<div  className="divCounter">


  <td align="center"> {quantity} </td>
  <button onClick={onRemove} type="button" className="btn btn-primary">-</button>
  <button onClick={onAddCart} type="button" className="btn btn-primary">Agregar al carrito</button>
  <button onClick={onAdd} type="button" className="btn btn-primary">+</button>




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