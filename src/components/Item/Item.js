import './item.css'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext/CartContext'
import { useContext } from 'react'




const Item = (props) => {
  const {removeProduct} = useContext (CartContext)

  if(!props.title){
    return <h3>Loading...</h3>   }
    
  return (
    <>
    <Link to={`/item/${props.id}`}>
      <div className="card mb-3" id="imagen" >
        
       
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <img src={props.pictureUrl} alt="..." id="max"/>
          <p className="card-text">{props.price}</p>
          {props.quantity && <p>Cantidad:  {`${props.quantity}`}</p>}
          

          
        </div>
        
      </div>
    </Link>
    
    {props.quantity && <button onClick={() => removeProduct(props.id)}
    > remover producto</button> }
    </>
  )
}

export default Item