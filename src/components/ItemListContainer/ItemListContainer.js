import Counter from "../Counter/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.css'

function getItemList () {
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve ([{id:"1", title: "Les Paul", price:"$100", pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJU8Zj0OJhoKqd4kifQXRM2XPFzbs481VmA&usqp=CAU", description: "Una guitarra historica, guitarristas como Jimmy Page y Slash optaban por este estilo de guitarra" },
            {id:"2", title: "Stratocaster", price:"$150", pictureUrl: "https://m.media-amazon.com/images/I/61AbOR57uAL._AC_SY879_.jpg", description: "Una guitarra para tocar todo tipo de música, guitarristas como Eric Clapton y SRV optaban por este estilo de guitarra"},
            {id:"3", title:"Telecaster", price:"$200", pictureUrl: "https://solomusica.com.ar/sm2020/7444-medium_default/leonard-le496mfyl-telecaster.jpg", description: "Una guitarra con un sonido muy particular, guitarristas como Izzy Stradlin y Keith Richards optaban por este estilo de guitarra"}])
            
        }, 2000);
    })
}




const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true)
    const [itemList, setItemList] = useState ([])

   
    useEffect(()=> {
       const items = getItemList()
       items.then(items => { setItemList(items) })
       setLoading(false)
       
    },[loading]) 

    return (<div className="estilo">
        <ItemList items={itemList} loading={loading}/>
        <Counter initial = {1} stock= {25}  />
    </div>);
}


export default ItemListContainer;