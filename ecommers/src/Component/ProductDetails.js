import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import CSS file
import ShoppingCart from './ShoppingCart'; // Import the ShoppingCart component

function ProductDetails() {
    const [qty, setQty] = useState(1);
    const [productObj, setProductObj] = useState({
        id: 0,
        productName: "",
        category: "",
        description: "",
        unitPrice: 0,
        productImage: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getSelectedProductDetails();
    }, []);

    function getSelectedProductDetails() {
        let url = "http://localhost:3100/products/" + id;
        axios.get(url)
            .then((resData) => {
                setProductObj(resData.data);
            })
            .catch((error) => {
                console.error("Error fetching product details:", error);
            });
    }

    function addToCartButtonClick() {
        let userId = sessionStorage.getItem("USER_ID");
        if (userId == null || userId === undefined) {
            alert("Please Login before adding items to Cart");
            navigate("/Login");
            return;
        }

        let cartObj = {
            productName: productObj.productName,
            unitPrice: productObj.unitPrice,
            quantity: qty,
            total: productObj.unitPrice * qty,
            userId: userId
        };

        let url = "http://localhost:3100/cart";
        axios.post(url, cartObj)
            .then(() => {
                navigate("/ShoppingCart"); // Navigate to the shopping cart page
            })
            .catch((error) => {
                console.error("Error adding to cart:", error);
            });
    }

    return (
        <div className="detailsContainer">
            <div className='detailsCard'>
                <img src={productObj.productImage} alt={productObj.productName} />
                <br />
                <span className="prdName">{productObj.productName}</span>  <br />
                <span>Quantity: <button onClick={() => setQty(qty + 1)}>+</button> {qty} <button onClick={() => { if (qty > 1) setQty(qty - 1) }}>-</button></span><br/><br/><br />
                <span>Unit Price: ₹ {productObj.unitPrice.toFixed(2)}</span><br />
                <span>Product Description: {productObj.description}</span><br />
                <button onClick={addToCartButtonClick}>Add To Cart</button>
            </div>
            <ShoppingCart /> {/* Render the ShoppingCart component */}
        </div>
    );
}

export default ProductDetails;
