import Counter from "../Counter/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.css'
import { useParams } from "react-router";
import getItemList from "../../services/getItems";







const ItemListContainer = () =>{
    const [loading, setLoading] = useState("loading")
    const [itemList, setItemList] = useState ([])


    const params = useParams()

    const id= params.id
   
    useEffect(()=> {
       const items = getItemList()
       items.then(items => { setItemList(items) })
       setLoading("")
       
    },[loading]) 

    


    return (<div className="estilo">
        <ItemList items={id ? itemList.filter(item => item.categoryId == id) : itemList} loading={loading}/>
        {/* <Counter initial = {1} stock= {25}  /> */}
    </div>);
}


export default ItemListContainer;