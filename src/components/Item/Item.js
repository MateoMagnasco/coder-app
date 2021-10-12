import './item.css'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext/CartContext'
import { useContext } from 'react'




const Item = ({product}) => {
  const {removeProduct, clearCart, products} = useContext (CartContext)

  if(!product.title){
    return <h3>Loading...</h3>   }
    
  return (
    <>
    <Link to={`/item/${product.id}`}>
      <div className="card mb-3" id="imagen" >
        
       
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <img src={product.pictureUrl} alt="..." id="max"/>
          <p className="card-text">{product.price}</p>
          {product.quantity && <p>Cantidad:  {`${product.quantity}`}</p>}
          

          
        </div>
        
      </div>
    </Link>
    
    {product.quantity && <button onClick={() => removeProduct(product.id)}
    > remover producto</button> }
    {!products && clearCart()}
    </>
  )
}

export default Item