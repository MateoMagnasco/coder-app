import './item.css'
import { Link } from 'react-router-dom'



const Item = (props) => {
  if(!props.title){
    <h3>Loading...</h3>
  }
  return (
    <Link to={`/item/${props.id}`}>
      <div className="card mb-3" id="imagen" >
        
       
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <img src={props.pictureUrl} alt="..." id="max"/>
          <p className="card-text">{props.price}</p>
        </div>
        
      </div>
    </Link>
  )
}

export default Item