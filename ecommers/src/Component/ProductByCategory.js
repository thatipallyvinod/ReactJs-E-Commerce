import { useEffect, useState } from "react";
import axios from 'axios';

import { Link, useParams } from "react-router-dom";
 
function ProductsByCategory() {

    const [productsArray, setProductsArray] = useState([]);
    const {id}  =  useParams();

    useEffect(() => {
        getProductsClick();
    }, []);

    function getProductsClick() {
        let url = "http://localhost:3100/products?category=" + id;
        axios.get(url).then((resData) => {
            setProductsArray(resData.data);
        });
    }

    return (
        <div className="productContainer">
            {productsArray.map((item, index) => (
                <div className="productCard" key={index}>
                    <img src={item.productImage} height={100} width="100" alt={item.productName} />
                    <br />
                    <span className="prdName">{item.productName}</span>  <br />
                    <span className="prdPrice"> ₹ {item.unitPrice.toFixed(2)}</span>
                    <br />
                    <Link to={"/ProductDetails/" +  item.id}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default ProductsByCategory;
