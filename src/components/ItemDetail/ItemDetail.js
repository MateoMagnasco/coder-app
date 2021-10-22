import "./itemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="card mb-3" id="div">
      <h3 className="card-title">{item.title}</h3>
      <p className="card-text">{item.description}</p>
      <img src={item.pictureUrl} className="card-img-top" alt="..." id="max" />
      <div className="card-body">
        <p className="card-text">Precio: ${item.price}</p>
        <h6>Stock : {item.stock}</h6>
      </div>
    </div>
  );
};

export default ItemDetail;
