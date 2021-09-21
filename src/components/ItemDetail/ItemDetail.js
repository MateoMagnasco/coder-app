import Item from "../Item/Item"
import "./itemDetail.css"
import Counter from "../Counter/ItemCount"

const ItemDetail = (props) => {

    return(
        <div className="card mb-3" id="div">
            <h3 className="card-title">{props.item.title}</h3>
            <p className="card-text">{props.item.description}</p>
            <img src={props.item.pictureUrl} class="card-img-top" alt="..." id="max"/>
            <div className="card-body" >
                <p className="card-text">{props.item.price}</p>
            </div>
        <Counter initial={1} stock={25}/>
        </div>


    )

}

export default ItemDetail
