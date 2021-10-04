import { Link } from "react-router-dom";
import "./checkoutButton.css"


const CheckoutButton = () => {

    return <>
<Link to = {`/cart`}>
<button className="btn btn-primary" type="button">Ir al carrito</button>
</Link>



</>
}

export default CheckoutButton;