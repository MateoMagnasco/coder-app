import { NavLink, Link } from "react-router-dom";
import "./brand.css"

const Brand = () => {

    return ( 
        <div className="brand">
            <Link to={"/"} className="option">
                <img src={"https://cdn.wallpapersafari.com/63/13/VUf6JM.jpg"} alt="..." id="max"/>
            </Link>
        </div>
    );
}

export default Brand;