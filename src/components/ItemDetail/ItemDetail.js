import Item from "../Item/Item"
import "./itemDetail.css"
import Counter from "../Counter/ItemCount"
import { useState } from "react"



const ItemDetail = (props) => {

    const [count, setCount] = useState (0)

    const [added, setAdded] = useState (false)

    const product = props.item

    return(
        <div className="card mb-3" id="div">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">{product.description}</p>
            <img src={product.pictureUrl} class="card-img-top" alt="..." id="max"/>
            <div className="card-body" >
                <p className="card-text">Precio: {product.price}</p>
            </div>

            {added ? "" : <Counter initial={1} stock={25} setCount={setCount} setAdded= {setAdded} itemData={product} />}
        </div>


    )

}

export default ItemDetail
