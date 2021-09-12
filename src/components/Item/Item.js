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




  /*   <div class="card" >
        <h3>{props.title}</h3>
    <img src={props.pictureUrl} class="card-img-top" alt="foto"/>
  <div class="card-body">
    <p class="card-text">{props.price}</p>
  </div>
</div> */
  /*   <div> 
        <h3>{props.title}</h3>
   
        <img src={props.pictureUrl}></img>
        <h3>{props.price}</h3> 
        
    </div> */


)
}

export default Item