import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import './itemDetailContainer.css'
import getItemList from "../../services/getItems"
import { useParams } from "react-router"
import CheckoutButton from "../CheckoutButton/CheckoutButton"
import { db } from '../../services/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { getProductById } from "../../services/firebase/firebase"




 

const ItemDetailContainer =() =>{
  

    const[itemData,setItem] = useState(null)


    const params = useParams()
    const id= params.id

    useEffect(()=>{
         getProductById(id).then(product => {setItem(product)})

        },[])
    
        if(!itemData){
            return <h1 style={{color:"white"}}>Loading...</h1>
        }
        console.log(itemData)
    return (
        <div className="estilo">
            <ItemDetail item={itemData}/>
            
            <CheckoutButton/>

        </div>
    )

}

export default ItemDetailContainer;



