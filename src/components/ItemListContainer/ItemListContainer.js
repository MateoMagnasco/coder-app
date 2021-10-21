import Counter from "../Counter/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import './itemListContainer.css'
import { useParams } from "react-router";
import { db } from "../../services/firebase/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";


const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        if(!categoryId) {
            setLoading(true)
            getDocs(collection(db, 'items')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching items', error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            setLoading(true)
            getDocs(query(collection(db, 'items'), where('categoryId', '==', parseInt(categoryId)))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                }) 
                setProducts(products)
            }).catch((error) => {
                console.log('Error searching items', error)
            }).finally(() => {
                setLoading(false)
            })
        }      
    }, [categoryId])

    console.log(products)
    console.log(categoryId)
    return (
        <div className="ItemListContainer" >
             { loading ? <h1 style={{color:"white"}}>Loading...</h1>  : <ItemList products={products || []}/> }
        </div>
    )    
    
}

export default ItemListContainer











/* const ItemListContainer = () =>{
    const [loading, setLoading] = useState(true)
    const [itemList, setItemList] = useState ([])
    const {categoryid} = useParams()


    const params = useParams()

    const id= params.id
   
    useEffect(()=> {
       const items = getItemList()
       items.then(items => { setItemList(items); setLoading(false) })
     
       
    },[loading]) 

   
    return (
    
    <div className="estilo">
        {itemList== false? <h1 style={{color:"white"}}>Loading...</h1>:<ItemList items={id ? itemList.filter(item => item.categoryId == id) : itemList} /> }
        
    </div>);
}


export default ItemListContainer; */