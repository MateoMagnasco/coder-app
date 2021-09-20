import Item from "../Item/Item"
import "./itemList.css"





/* const handleOnKeyDown = (ev) =>{
  if(ev.key==="a" || ev.key==="e" || ev.key==="i" || ev.key==="o" || ev.key==="u"){
    ev.preventDefault()
  } else {console.log(ev.key)}

} */


const ItemList = (props) =>{
  console.log(props.items)  
    
    return ( 
    <div id="estilo">
       {props.items.map(item => {return <div key={item.id}> <Item title={item.title} price = {item.price} pictureUrl = {item.pictureUrl} description = {item.description}  /></div> })
       } 
    
     </div>
    )
    
    
}

export default ItemList;