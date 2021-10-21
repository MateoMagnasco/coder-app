import './item.css'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext/CartContext'
import { useContext } from 'react'

const Item = ({item}) => {
  const {removeProduct, clearCart, products} = useContext (CartContext)
  if(!item.title){
    return <h3>Loading...</h3>   }
    
  return (
    <>
    <Link to={`/item/${item.id}`}>
      <div className="card mb-3" id="imagen" >
        
       
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <img src={item.pictureUrl} alt="..." id="max"/>
          <p className="card-text">  ${item.price}</p>
          {item.quantity && <p>Cantidad:  {`${item.quantity}`}</p>}
          

          
        </div>
        
      </div>
    </Link>
    
    {item.quantity && <button onClick={() => removeProduct(item.id)}
    > remover producto</button> }
    {!products && clearCart()}
    </>
  )
}

export default Item