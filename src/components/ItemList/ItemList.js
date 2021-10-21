import Item from "../Item/Item"
import "./itemList.css"


const ItemList = ({products}) =>{

    
    return ( 
    <div id="estilo">
       {products.map(product => {return <div key={product.id}> <Item item={product}/></div> })
       } 
    
     </div>
    )
    
    
}

export default ItemList; 