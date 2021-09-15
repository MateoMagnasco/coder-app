import Item from "../Item/Item"
import "./itemDetail.css"

const ItemDetail = (props) => {

    return(
        <div className="card mb-3" id="div">
            <h3 className="card-title">{props.item.title}</h3>
            <p className="card-text">{props.item.description}</p>
            <img src={props.item.pictureUrl} class="card-img-top" alt="..." id="max"/>
            <div className="card-body" >
                <p className="card-text">{props.item.price}</p>
            </div>
        </div>

    )

}

export default ItemDetail
