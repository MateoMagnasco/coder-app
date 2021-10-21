import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  Timestamp,
  writeBatch,
} from "firebase/firestore";
import "./cart.css";
import ItemList from "../ItemList/ItemList";
import CartContext from "../../context/CartContext/CartContext";
import { db } from "../../services/firebase/firebase";

const Cart = () => {
  const [total, setTotal] = useState();
  const [processingOrder, setProcessingOrder] = useState(false);
  const { products, clearCart, getTotal, totalPrice } = useContext(CartContext);

  useEffect(() => {
    setTotal(getTotal());
  }, [getTotal]);

  const confirmOrder = () => {
    setProcessingOrder(true);

    const objOrder = {
      items: products,
      total: total,
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);
    const outOfStock = [];

    objOrder.items.forEach((prod, i) => {
      getDoc(doc(db, "items", prod.id)).then((DocumentSnapshot) => {
        if (DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
          batch.update(doc(db, "items", DocumentSnapshot.id), {
            stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity,
          });
        } else {
          outOfStock.push({
            ...DocumentSnapshot.data(),
            id: DocumentSnapshot.id,
          });
        }
      });
    });

    if (outOfStock.length === 0) {
      addDoc(collection(db, "orders"), objOrder)
        .then(() => {
          batch.commit().then(() => {});
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setProcessingOrder(false);
          clearCart();
          setTotal(0);
        });
    }
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Cart</h1>
      {products && products.length ? (
        <div>
          {" "}
          <h3 style={{ color: "white" }}>Precio Total: {`$${totalPrice}`}</h3>
          {!processingOrder && products.length > 0 && (
            <button onClick={() => clearCart()} className="Button">
              Cancelar compra
            </button>
          )}
          {!processingOrder && products.length > 0 && (
            <button onClick={() => confirmOrder()} className="Button">
              Confirmar Compra
            </button>
          )}
          {!processingOrder ? (
            <ItemList products={products} />
          ) : (
            "Procesando Orden"
          )}
        </div>
      ) : (
        <Link to="/" style={{ color: "white" }}>
          Aún no se han agregado productos al carrito!
        </Link>
      )}
    </div>
  );
};
export default Cart;
