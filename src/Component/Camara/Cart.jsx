import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import "./main.css";
const Cart = () => {
  const navigate = useNavigate();
  const pincodes = ["226003", "226018", "226001", "226004", "224210", "224001"];

  const [input_value, setinputvalue] = useState("");
  const onInputChange = (e) => {
    setinputvalue(e.target.value);
    console.log(input_value);
  };
  const { state } = useLocation();
  const [itemInfo, setitemInfo] = useState(null);
  const handleAddToCart = (item) => {
    // const jsonCartItems = JSON.stringify(item);
    // localStorage.getItem("cartItems");
    localStorage.getItem("cartItems")
      ? localStorage.setItem(
          "cartItems",
          JSON.stringify([
            ...JSON.parse(localStorage.getItem("cartItems")),
            item,
          ])
        )
      : localStorage.setItem("cartItems", JSON.stringify([item]));
    const tempCartItems = JSON.parse(localStorage.getItem("cartItems"));
    navigate("/product", { state: tempCartItems });
  };

  useEffect(() => {
    if (state) {
      setitemInfo(state?.itemDetail);
    }
  }, []);

  const submithandler = (e) => {
    e.preventDefault();
    // console.log("clg==>", input_value);
    var check = pincodes.includes(input_value);
    var msgspan = document.querySelector("#deliverymsg");

    if (check) {
      msgspan.innerHTML = "delivery is available";
    } else {
      msgspan.innerHTML = "delivery is not available";
    }
    setinputvalue("");
  };
  // console.log(item);
  return (
    <>
      <Navigation />

      <div className="cart-container">
        <div className="cart-img-container">
          <img src={itemInfo?.img} width={"50px"} />
          <div className="cart-buttons">
            <button
              className="cart-btn go-to"
              onClick={() => handleAddToCart(itemInfo)}
            >
              ADD TO CART
            </button>
            <button className="cart-btn buy-now">BUY NOW</button>
          </div>
        </div>
      </div>
      <div className="cart-other-specification">
        <div className="cart-title">
          <label>{itemInfo?.title}</label>
        </div>
        <div className="cart-price">
          <label>{itemInfo?.price}</label>
        </div>
        <div className="cart-description">
          <label>{itemInfo?.decription}</label>
        </div>
        <div className="cart-pixel">
          <label>{itemInfo?.Pixels}</label>
        </div>
        <div className="cart-sensor">
          <label>{itemInfo?.SensorType}</label>
        </div>
        <div className="cart-warenty">
          <label>{itemInfo?.Warranty}</label>
        </div>
        <form className="delivery" onSubmit={submithandler}>
          <label>Delivery : </label>
          <input
            type="text"
            onChange={onInputChange}
            placeholder="Enter Delivery Pincode"
            required
          />
          <button type="submit">Check</button>
        </form>
        <span
          id="deliverymsg"
          style={{
            color: "red",
            fontSize: "15px",
            potition: "relative",
            top: "345px",
            left: "80px",
          }}
        ></span>
      </div>
    </>
  );
};

export default Cart;
