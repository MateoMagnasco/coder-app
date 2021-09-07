import Counter from "../Counter/ItemCount";





const ItemListContainer = (props) =>{
    return (<div>
        <h3>{props.greeting}</h3>
        <Counter initial = {1} stock= {25}  />
    </div>);
}


export default ItemListContainer;