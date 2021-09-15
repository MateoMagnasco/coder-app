import Item from "../Item/Item"
import "./itemList.css"


const ItemList = (props) =>{
  console.log(props.items)  
    
    return <div id="estilo">
        {props.loading===false? props.items.map(item => {return <div key={item.id}> <Item title={item.title} price = {item.price} pictureUrl = {item.pictureUrl} description = {item.description}  /> </div> }) : <h3 id="loading">Loading...</h3> }

                
        </div>
         
    
    
}

export default ItemList;