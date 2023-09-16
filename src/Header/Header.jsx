import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../images/logo-removebg-preview.png";
import searchlogo from "../images/Search_icons.png";
import DownArrow from "../images/white_down_arrow-removebg-preview.png";
import { BsCartFill, BsQuestionSquareFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";
import { MdFileDownload } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
const Header = () => {
  const navigate = useNavigate();

  // const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [displayStyle, setDisplayStyle] = useState("none");
  const toggleDisplayStyle = () => {
    setDisplayStyle((prevDisplayStyle) =>
      prevDisplayStyle === "none" ? "block" : "none"
    );
  };
  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("SearchItems"));
  //   // console.log(storedData);
  //   if (storedData) {
  //     setData(storedData);
  //   }
  // }, []);
  const SearchHandlerFunction = (event) => {
    setSearchText(event.target.value);
    // console.log(searchText)
    if (event.target.value === "") {
      setFilterData("");
      navigate("/");
    } else {
      const filterResults = JSON.parse(
        localStorage.getItem("SearchItems")
      ).filter((item) => {
        return item.title
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      navigate("/camara", {
        state: { itemDetail: filterResults, inputValue: searchText },
      });
      // for(let i=0; i < filterData.length; i++){
      //   console.log(filterData[i].title);
      //   if(filterData[i].ti){

      //   }else{
      //     navigate('/product');
      //   }
      // }
      // console.log(filterData);
    }

    // }

    // for (let i = 0; i < filterResults.length; i++) {

    //   if(filterResults[i].title){
    //     navigate('/camara');
    //   }
    // if (searchText.length < 1) {
    //   found = true;
    // } else if (!found) {
    //   found = false;
    // } else if (event.target.value == null) {
    //   found = false;
    // }

    // if (found) {
    //   navigate("/camara");
    // } else {
    //   navigate("/");
    // }
    // };
  };
  const HandleSumbitSearch = () => {
    console.log("hello");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link className="logo" to ="/">
        <img src={logo} />
        </Link>
        <div className="search-bar">
          <input
            placeholder=" Search for products,brands and more"
            type="text"
            // value={}
            name="searchItem"
            onChange={SearchHandlerFunction}
          />
          <img src={searchlogo} onClick={HandleSumbitSearch} />
        </div>
        {/* <ul style={{display:'block',left:'-120px',top:'230px',height:'200px',position:'relative',background:'lightgray',zIndex:'1'}}>
        {filterData.map(item => (
          searchText != 0 ?
          <div className="search-container">

            <li key={item.id}>{item.title}</li>
            <li key={item.id}>{item.id}</li>
          </div>
          
          
        : ''))}
      </ul> */}
      </div>
      <div className="loginsection">
        <Link to="/login">Login</Link>
      </div>
      <div className="other-tabs">
        <div className="other-subtabs" id="other-subtabs">
          <Link to="/">Home</Link>

          <Link onClick={toggleDisplayStyle}>More</Link>

          <img
            src={DownArrow}
            id="img"
            onClick={toggleDisplayStyle}
            style={{
              transform:
                displayStyle === "block" ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
          <ul className="menu" style={{ display: displayStyle }}>
            <li>
              <Link to="/notification">
                <FaBell className="icons" style={{ color: "dodgerblue" }} />
                Notification Preferences
              </Link>
            </li>
            <li>
              <Link to="/care">
                <BsQuestionSquareFill
                  className="icons"
                  style={{ color: "dodgerblue" }}
                />
                24&times;7 Customer Care
              </Link>
            </li>
            <li>
              <Link to="/advertise">
                <HiTrendingUp
                  className="icons"
                  style={{ color: "dodgerblue" }}
                />
                Advertise
              </Link>
            </li>
            <li>
              <Link to="/downoad">
                <MdFileDownload
                  className="icons"
                  style={{ color: "dodgerblue" }}
                />
                Download App
              </Link>
            </li>
          </ul>

          <Link to="/cart" className="cart">
            <BsCartFill style={{ position: "absolute", right: "43px" }} />
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
