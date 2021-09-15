import Item from "../Item/Item"


const ItemList = (props) =>{
  console.log(props.items)  
    
    return <>
        <ul>
         {/*    <Item title={items[0].title} price = {items[0].price}/>  */}
        {props.items.map(item => {return <Item key={item.id} title={item.title} price = {item.price} pictureUrl = {item.pictureUrl} description = {item.description}  />  })}         
        </ul>
        </> 
    
    
}

export default ItemList;