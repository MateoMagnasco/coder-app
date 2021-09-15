import Item from "../Item/Item"
import "./itemList.css"


const ItemList = (props) =>{
  console.log(props.items)  
    
    return <div id="estilo">
        {props.items.map(item => {return <div key={item.id}> <Item  title={item.title} price = {item.price} pictureUrl = {item.pictureUrl} description = {item.description}  /> </div> })}         
        </div>
         
    
    
}

export default ItemList;