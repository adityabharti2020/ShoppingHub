import React from "react";
import { Link } from "react-router-dom";
import "./Electronics.css";
import { useState } from "react";

const Electronics = (props) => {
  const [activeImage, setActiveImage] = useState(0);
  const items = props.products;

  return (
    <div className="item-details">
      <div className="details">
        <p id="elec-gaget">view all electronic Accessories here &gt;</p>
        <Link to="/camara" id="elec-gaget">view all</Link>
      </div>
      <div className="item-contener">
        {items.map((item, index) => {
          return (
            <Link
              to={item.path}
              className="item-sub-details"
              index={activeImage === index && "active"}
            >
              <div className="image-box">
                <img src={item.ProductImg} key={`image${index}`} />
              </div>
              <div className="text-container">
                <div className="title-box">
                  <p key={`title${index}`}>{item.title}</p>
                </div>
                <div className="price-box">
                  <p key={`price${index}`}>{item.Price}</p>
                </div>
                <div className="brand-box">
                  <p key={`brand${index}`}>{item.Brand}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Electronics;
