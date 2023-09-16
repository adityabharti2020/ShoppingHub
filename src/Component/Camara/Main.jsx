import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./main.css";
const Main = ({items, searchitems}) => {
  const navigate = useNavigate();
  localStorage.setItem('SearchItems',items)
  const jsonString = JSON.stringify(items);
  localStorage.setItem("SearchItems", jsonString);
   
  console.log(searchitems);
  // let filteredItems = searchitems.filter((item) => {
  //   return item.title
  //     .toLowerCase()
  //     .includes(input_text.toLowerCase()); 
  // });
  // console.log(filteredItems);
  return (
    <div>
      {searchitems ? (searchitems?.itemDetail
.map((newitem, index) => {
        return ( <div
            // to="/cart"
          style={{cursor:'pointer'}}
            onClick={() => navigate("/cart", { state: { itemDetail: newitem } })}
            className="camara-item-container"
          >
            <div className="camara-image-box">
              <img src={newitem.img} />
            </div>
            <div className="camara-details">
              <div className="camara-title">
                <p>{newitem.title}</p>
              </div>
              <ul>
                <li>{newitem.decription}</li>
                <li>{newitem.Pixels}</li>
                <li>{newitem.SensorType}</li>
                <li>{newitem.Warranty}</li>
              </ul>
            </div>
            <div className="camra-prices">
              <h2>{newitem.price}</h2>
            </div>
          </div>
        );
      })) : (items.map((newitem, index) => {
        return ( <div
            // to="/cart"
          style={{cursor:'pointer'}}
            onClick={() => navigate("/cart", { state: { itemDetail: newitem } })}
            className="camara-item-container"
          >
            <div className="camara-image-box">
              <img src={newitem.img} />
            </div>
            <div className="camara-details">
              <div className="camara-title">
                <p>{newitem.title}</p>
              </div>
              <ul>
                <li>{newitem.decription}</li>
                <li>{newitem.Pixels}</li>
                <li>{newitem.SensorType}</li>
                <li>{newitem.Warranty}</li>
              </ul>
            </div>
            <div className="camra-prices">
              <h2>{newitem.price}</h2>
            </div>
          </div>
        );
      })) }
      
      
    </div>
    
  );
};

export default Main;
