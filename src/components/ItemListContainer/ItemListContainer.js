import Counter from "../Counter/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.css'
import { useParams } from "react-router";
import getItemList from "../../services/getItems";







const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true)
    const [itemList, setItemList] = useState ([])


    const params = useParams()

    const id= params.id
   
    useEffect(()=> {
       const items = getItemList()
       items.then(items => { setItemList(items); setLoading(false) })
     
       
    },[loading]) 

  
    return (
    <div className="estilo">
        {loading== true? <h1 style={{color:"white"}}>Loading...</h1>:<ItemList items={id ? itemList.filter(item => item.categoryId == id) : itemList} /> }
        
    </div>);
}


export default ItemListContainer;