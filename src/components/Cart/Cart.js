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
import ContactForm from "../ContactForm/ContactForm";
import { useHistory } from "react-router";
import userEvent from "@testing-library/user-event";

const Cart = () => {
  const [total, setTotal] = useState();
  const [processingOrder, setProcessingOrder] = useState(false);
  const { products, clearCart, getTotal, totalPrice} = useContext(CartContext);
  const [confirmedOrder, setConfirmedOrder] = useState(false);
  const [form, setForm] = useState(false);
  const [contact, setContact] = useState({
    phone: "",
    address: "",
    comment: "",
  });
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [sentInfo, setSentInfo] = useState(false)
  

  useEffect(() => {
    setTotal(getTotal());
  }, [getTotal]);

  const confirmOrder = () => {
    setProcessingOrder(true);
    setForm(true);
    const objOrder = {
      firstName,
      lastName,
      email,
      items: products,
      total: total,
      date: Timestamp.fromDate(new Date()),

      /* firstName:
      lastName:
      email: */
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
    setConfirmedOrder(true);
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Cart</h1>
      {products && products.length ? (
        <div>
          {" "}
          <h3 style={{ color: "white" }}>Precio Total: {`$${totalPrice}`}</h3>
          {!processingOrder ? (
            <ItemList products={products} />
          ) : (
            "Procesando Orden"
          )}
        </div>
      ) : (
        <Link to="/" style={{ color: "white" }}>
          {confirmedOrder
            ? "La compra se ha realizado con éxito!"
            : "Aún no se han agregado productos al carrito!"}
        </Link>
      )}
      {}<ContactForm
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        confirmOrder={confirmOrder}
        clearCart={clearCart}
        setSentInfo ={setSentInfo}
      />
      {sentInfo &&!processingOrder && products.length > 0 &&  (
        <button onClick={() => confirmOrder()} className="Button">
          Confirmar Compra
        </button>
      )}
      {!processingOrder && products.length > 0 && (
        <button onClick={() => clearCart()} className="Button">
          Cancelar compra
        </button>
      )}
      
    </div>
  );
};
export default Cart;
