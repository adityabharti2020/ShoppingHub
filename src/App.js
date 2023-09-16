import "./App.css";
import Header from "./Header/Header";
import Cart from "./Component/Camara/Cart";
import More from "./Component/More/More";
import Login from "./login/Login";
import Home from "./Component/Home/Home"
import Notification from './Component/Notification/Notification'
import Care from './Component/Care/Care'
import Advertise from './Component/Advertise/Advertise'
import Download from './Component/Download/Download'
import Printer from './Component/Printer/Printer'
import PowerBank from './Component/PowerBank/PowerBank'
import Camara from './Component/Camara/Camara'
// import Main from './Component/Camara/Main'
import Trimmer from './Component/Trimmer/Trimmer'
import Monitor from './Component/Monitor/Monitor'
import Product from './Component/Camara/Product'
import { Routes, Route} from "react-router-dom";
import { useState } from "react";
const catogories_items = [
  {
      "id":1,
      "title":"Grosories",
      "img":"https://i.pinimg.com/originals/3d/5c/e8/3d5ce8662dac6c2e92a2ffd9f4b96d36.png",
      "dropDown":"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"

  },
  {
      "id":2,
      "title":"Mobile",
      "img":"https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
      "dropDown":"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"

  },
  {
      "id":3,
      "title":"Fashion",
      "img":"https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
      "dropDown":"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"

  },
  {
      "id":4,
      "title":"Electronics",
      "img":"https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      "dropDown":"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"

  },
  {
      "id":5,
      "title":"Human Funiture",
      "img":"https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
      "dropDown":"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"

  },
  {
      "id":6,
      "title":"Two whealers",
      "img":"https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
      "dropDown":"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"

  },
  {
      "id":7,
      "title":"Beauty Toys",
      "img":"https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
      "dropDown":"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"

  },
  {
      "id":8,
      "title":"Traveles",
      "img":"https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
      "dropDown":"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"

  },
  {
      "id":9,
      "title":"Appliances",
      "img":"https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      "dropDown":"https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"

  }
];
function App() {
     const[data,setdata] =useState(catogories_items);

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/main" element = {<Main/>}/> */}
        <Route path = "/" element ={<Home catogories_items={data}/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/care" element={<Care />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/download" element={<Download />} />
        <Route path="/more" element={<More />} />
        <Route path="/printer" element={<Printer />} />
        <Route path="/powerbank" element={<PowerBank />} />
        <Route path="/camara" element={<Camara />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/trimer" element={<Trimmer />} />

        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
