import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './itemDetailContainer.css'
import getItemList from "../../services/getItems"
import { useParams } from "react-router"



 

const ItemDetailContainer =() =>{
  

    const[itemData,setItem] = useState([])


    const params = useParams()
    const id= params.id

    useEffect(()=>{
        const items = getItemList()
        items.then(items => { 
        const item = items.find(item=>item.id == id) 
        setItem(item)
        })
    })
        if(itemData== false){
            return <h1 style={{color:"white"}}>Loading...</h1>
        }

    return (
        <div className="estilo">
            <ItemDetail item={itemData}/>

        </div>
    )

}

export default ItemDetailContainer;



