import Item from "../Item/Item"


const ItemList = (props) =>{
  console.log(props.items)  
    
    return <div>
        <ul>
         {/*    <Item title={items[0].title} price = {items[0].price}/>  */}
        {props.items.map(item => {return <Item title={item.title} price = {item.price} pictureUrl = {item.pictureUrl} description = {item.description}  />  })}         
        </ul>
        </div> 
    
    
}

export default ItemList;