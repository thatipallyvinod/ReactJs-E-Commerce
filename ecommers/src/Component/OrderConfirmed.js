import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./OrderConfirmed.css";

function OrderConfirmed() {
    const { id } = useParams();
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = () => {
        const userId = sessionStorage.getItem("USER_ID");
        if (userId) {
            axios.get(`http://localhost:3100/cart?userId=${userId}`)
                .then(response => {
                    setCartItems(response.data);
                    calculateTotalAmount(response.data);
                })
                .catch(error => {
                    console.error("Error fetching cart items:", error);
                });
        }
    };

    const calculateTotalAmount = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.total;
        });
        setTotalAmount(total);
    };

    const checkOutButtonClick = () => {
        // Ensure cartItems array is not empty
        if (cartItems.length > 0) {
            // Check if the first item has the userName property
            if (cartItems[0].hasOwnProperty("userName")) {
                // Proceed with checkout logic
                console.log("Checkout logic goes here");
            } else {
                console.error("userName property not found in cartItems");
            }
        } else {
            console.error("Cart items are empty");
        }
    };

    return (
        <div className="order-confirmed-container">
            <div className="order-confirmed-content">
                <h3 className="order-confirmed-title">Order Confirmation</h3>
                <hr />
                <h1>Your Order Id: {id}</h1>
                <img className="order-confirmed-image" src="https://media.istockphoto.com/id/1438622722/photo/thank-you-message-on-paper-hanging-with-rope-on-yellow-background.webp?b=1&s=170667a&w=0&k=20&c=KK-LS2ZBemtbrfGh81z32uPO_jm7YLtzf5ojVDEwfuM=" alt="Thank You" />
                <hr />
                <p className="order-confirmed-message"><b>Your order has been successfully placed. Thank you for shopping with us!</b></p>
                {/* Add extra fields below */}
                <p className="order-confirmed-extra-info">Order Date: {new Date().toLocaleDateString()}</p>
                <p className="order-confirmed-extra-info" to="./getFinalTotalAmount" >Total Amount: ₹{totalAmount.toFixed(2)}</p>
                {/* End of extra fields */}
                <hr />
                <button className="order-confirmed-link" onClick={checkOutButtonClick}>Complete Order</button>
                <Link className="order-confirmed-link" to="/">Visit home to continue shopping</Link>
            </div>
        </div>
    );
}

export default OrderConfirmed;
