import Item from "../Item/Item"
import "./itemList.css"


/* const ItemList = ({products}) => {

  if(products.length === 0) {
    return <h3>No hay productos</h3>
  } 

  return (
    <ul className="list-group">
      {products.map(product =><Item key={product.id} product={product}/>)}
    </ul>
  )
}
export default ItemList */







const ItemList = ({products}) =>{

    
    return ( 
    <div id="estilo">
       {products.map(product => {return <div key={product.id}> <Item id={product.id} title={product.title} price = {product.price} pictureUrl = {product.pictureUrl} description = {product.description} quantity = {product.quantity}  /></div> })
       } 
    
     </div>
    )
    
    
}

export default ItemList; 