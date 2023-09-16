import React from "react";
import "./main.css";
import { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../../features/counter/counterSlice";
// import { increment } from "../../features/counter/counterSlice";
const tempCartItems = JSON.parse(window.localStorage.getItem("cartItems"));

const Product = () => {
  // const count = useSelector((state) => state.counter.count);
  // const dispatch = useDispatch();
  const { state } = useLocation();
  const [itemInfo, setitemInfo] = useState(tempCartItems);
  const [Itemprice,setprice] = useState([0,0,0]);
  // console.log(tempCartItems);
  useEffect(() => {
    if (state) {
      setitemInfo(state);
    }
  }, [setitemInfo]);
  const deleteitemfun = (key,e) => {
    const deleteitem = [...itemInfo];
    // e.preventDefault();
    console.log({deleteitem})   
    deleteitem.splice(key, 1);
    console.log("reddddd=>",deleteitem)
    setitemInfo(deleteitem);
    localStorage.setItem("cartItems", JSON.stringify(deleteitem));
  };

  const increment = (e, id,pid) => {
    // e.preventDefault();
    // console.log({ check: id });
    let counthtml = document.getElementById(`${id}`);
    counthtml.innerText = parseInt(document.getElementById(`${id}`).innerText) + 1;
    let countValue =document.getElementById(`${id}`).innerText;
    let price = document.getElementById(`${pid}`).innerText;
    var totalPrice = price * countValue;
    const percentage = totalPrice *10 / 100;

      let subtotal = totalPrice - percentage + 50;
      setprice([totalPrice,percentage,subtotal]);
    
    // console.log(Itemprice[0] + "<br>");
    // console.log(Itemprice[1]+ "<br>");
    // console.log(Itemprice[2]+ "<br>");
    // console.log(50 + "<br>");
    // console.log(subtotal);
    // console.log(countValue);
    // console.log(price);
    // console.log(totalPrice);
    
  };
  const decrement = (e, id,pid) => {
    let decrement = document.getElementById(`${id}`).innerText;
    if (decrement > 0) {
      decrement = parseInt(document.getElementById(`${id}`).innerText) - 1; 
    }
    document.getElementById(`${id}`).innerText = decrement;
    let decountValue =document.getElementById(`${id}`).innerText;
    let decprice = document.getElementById(`${pid}`).innerText;
    var totaldecrementPrice = decountValue*decprice;
    const percentage = totaldecrementPrice *10 / 100;
    if(percentage != 0){
      var deliveryCharges = 50;
      console.log(deliveryCharges);
    }
    let subtotal = totaldecrementPrice - percentage + deliveryCharges;
    setprice([totaldecrementPrice,percentage,subtotal]);
    
    
  };
  return (
    <>
      <Navigation />
      <div className="shopping-product-item-container">
        <div className="shopping-sub-product-item-container">
          {itemInfo?.map((newdata, id) => {
            // console.log({ id: id });
            return newdata ?  (
              <div className="shopping-items">
                <div className="shopping-img">
                  <img src={newdata.img} />
                </div>
                <div className="shopping-details">
                  <div className="shopping-cart-title" key={`title${id}`}>
                    <label>{newdata?.title}</label>
                  </div>
                  <div className="shopping-cart-price" key={`price${id}`}>
                  Price : <label id={`price${id}`}>{newdata.price}</label>
                  </div>
                  <div className="shopping-cart-pixel" key={`pixel${id}`}>
                    <label>Pixel :{newdata?.Pixels}</label>
                  </div>
                  <div
                    className="shopping-cart-remove-item"
                    key={`remove${id}`}
                  >
                    <button onClick={() => deleteitemfun(id)}>Remove</button>
                  </div>
                </div>
                <div className="shopping-counter">
                  <button
                    className="increment"
                    key={`increment${id}`}
                    id="increment"
                    onClick={(event) => increment(event, `count${id}`,`price${id}`)}
                  >
                    +
                  </button>
                  <div className="counter" key={`counter${id}`}>
                    <p id={`count${id}`}>0</p>
                  </div>
                  <button
                    className="decrement"
                    id="decrement"
                    key={`decrement${id}`}
                    onClick={(event) => decrement(event, `count${id}`,`price${id}`)}
                  >
                    -
                  </button>
                </div>
              </div>
            ) : <p>Data not available</p>
          })}
        </div>
        <div className="price-container">
          <div className="price-subContainer">
            <div className="price-heading">Price Details</div>
            <div className="shopping-price-item">
              <div className="price-item">Price Item</div>
              <div className="shopping-price">{Itemprice[0]}</div>
            </div>
            <div className="shopping-discount-price">
              <div className="discount-price-title">10% Discount </div>
              <div className="shopping-discount-amount">{Itemprice[1]}</div>
            </div>
            <div className="shopping-delivery-price">
              <div className="discount-delivery-title">Delivery Charges</div>
              <div className="shopping-Delivery-amount">50</div>
            </div>
            <div className="shopping-Total-price-details">
              <div className="shopping-total-title">Sub Total:</div>
              <div className="shopping-total-amount">{Itemprice[2]}</div>
            </div>
          </div>
          <div className="shopping-btn">
            <div className="convermation-btn">
              <button className="confirm-btn">Place Order</button>
                
                <Link to="/camara" className="Additem-btn">Add Item</Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
