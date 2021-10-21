import { useState, useContext } from "react";
import "./itemCounter.css";
import CartContext from "../../context/CartContext/CartContext";

const Counter = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  const onAdd = () => {
    if (quantity < item.stock) {
      setQuantity(quantity + 1);
    }
  };

  const onRemove = () => {
    if (quantity >= 0) {
      setQuantity(quantity - 1);
    }
  };

  const onAddCart = () => {
    setQuantity(0);
    addItem(item, quantity);
  };
  return (
    <div className="divCounter">
      <p align="center" className="quantity">
        {" "}
        {quantity}{" "}
      </p>
      <button onClick={onRemove} type="button" className="btn btn-primary">
        -
      </button>
      <button
        onClick={onAddCart}
        type="button"
        disabled={quantity === 0}
        className="btn btn-primary"
      >
        Agregar al carrito
      </button>
      <button onClick={onAdd} type="button" className="btn btn-primary">
        +
      </button>
    </div>
  );
};

export default Counter;
