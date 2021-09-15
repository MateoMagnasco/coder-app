import './item.css'
const Item = (props) => {
  return (
      <div className="card mb-3" id="imagen" >
        <img src={props.pictureUrl} class="card-img-top" alt="..." id="max"/>
        <p className="card-text">{props.description}.</p>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.price}.</p>
        </div>
      </div>
  )
}

export default Item