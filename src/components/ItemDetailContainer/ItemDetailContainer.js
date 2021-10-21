import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemDetailContainer.css";
import { useParams } from "react-router";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import { getProductById } from "../../services/firebase/firebase";
import Counter from "../Counter/ItemCount";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    getProductById(id).then((product) => {
      setItem(product);
    });
  }, []);

  if (!item) {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  }

  return (
    <div className="estilo">
      <ItemDetail item={item} />
      <Counter item={item} />

      <CheckoutButton />
    </div>
  );
};

export default ItemDetailContainer;
