import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";
import { useParams } from "react-router";
import { db } from "../../services/firebase/firebase";
import { collection, getDocs, query, where } from "@firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryId) {
      setLoading(true);
      getDocs(collection(db, "items"))
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducts(products);
        })
        .catch((error) => {
          console.log("Error searching items", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      getDocs(
        query(
          collection(db, "items"),
          where("categoryId", "==", parseInt(categoryId))
        )
      )
        .then((querySnapshot) => {
          const products = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          setProducts(products);
        })
        .catch((error) => {
          console.log("Error searching items", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryId]);

  return (
    <div className="ItemListContainer">
      {loading ? (
        <h1 style={{ color: "white" }}>Loading...</h1>
      ) : (
        <ItemList products={products || []} />
      )}
    </div>
  );
};

export default ItemListContainer;
