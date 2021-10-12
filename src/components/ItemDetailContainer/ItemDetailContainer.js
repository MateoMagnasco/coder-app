import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './itemDetailContainer.css'
import getItemList from "../../services/getItems"
import { useParams } from "react-router"
import CheckoutButton from "../CheckoutButton/CheckoutButton"
import { db } from '../../services/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'




 

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
            
            <CheckoutButton/>

        </div>
    )

}

export default ItemDetailContainer;



