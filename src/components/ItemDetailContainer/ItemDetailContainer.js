import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

function getObject (){

    const object = {title:"Guitarra Les Paul Deluxe", id:100, price: "$200", pictureUrl: "https://cdn.shopify.com/s/files/1/1304/0581/products/IMG_6218.jpg?v=1467660401", description:"Guitarra historica del año 1979!"}

    return new Promise ((resolve,reject)=>{
        setTimeout(()=> (resolve(object)),2000)

    })

}

const ItemDetailContainer =() =>{
    const item = getObject()

    const[itemData,setGtr] = useState([])

    useEffect(()=>{
        item.then(obj => {setGtr(obj)
        })
    })
    
    return (
        <div>
            <ItemDetail item={itemData}/>

        </div>
    )

}

export default ItemDetailContainer;



