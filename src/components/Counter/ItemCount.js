import { useState, useContext } from "react";
import "./itemCounter.css";
import CartContext from "../../context/CartContext/CartContext";

const Counter = ({ item }) => {
  const { addItem, products } = useContext(CartContext);
  

  const [quantity, setQuantity] = useState(0);
  const [cartItem, setCartItem] = useState (null)
  const [exceedStock, setExceedStock] = useState("")

  const onAdd = () => {

    const foundItem = products.find(product => product.id === item.id)
    if (foundItem) {
      setCartItem(foundItem)
    }

    if (quantity < item.stock +  (cartItem ? cartItem.quantity : 0)  ) {
      setQuantity(quantity + 1);
      
    }
  };

  const onRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onAddCart = () => {
    setQuantity(0);
    addItem(item, quantity);
    setCartItem({...item, quantity})
  };

  const message = () => {

  }


  return (
    <div className="divCounter">
      <p align="center" className="quantity">
        {" "}
        {quantity}{" "}
      </p>
     
      {cartItem && cartItem.quantity >= item.stock && <h6>No puedes superar el Stock disponible!</h6>}
      
      <button onClick={onRemove} type="button" disabled={ quantity === 0} className="btn btn-primary">
        -
      </button>
      <button
        onClick={onAddCart}
        type="button"
        disabled={quantity === 0 || quantity + (cartItem?  cartItem.quantity : 0) > item.stock }
        className="btn btn-primary"
      >
        Agregar al carrito
      </button>
      <button onClick={onAdd} type="button"  disabled={ quantity + (cartItem?  cartItem.quantity : 0) >= item.stock } className="btn btn-primary">
        +
      </button>
    </div>
  );
};

export default Counter;
