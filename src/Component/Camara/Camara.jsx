import React from "react";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import Main from "./Main";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
const Item_details = [
  {
    id:1,
    img: "https://rukminim2.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
    title:
      "Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black)",
    price: 32490,
    decription:
      "Self-Timer, Type C and Mini HDMI, 9 Auto Focus Points, 3x Optical Zoom, WiFi, Full HD, Video Recording at 1080 p on 30fps, APS-C CMOS sensor-which is 25 times larger than a typical Smartphone sensor.",
    Pixels: "18 MP",
    SensorType: "CMOS",
    Warranty:
      "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)",
  },
  { 
    id:2,
    img: "https://rukminim2.flixcart.com/image/312/312/kf75fgw0/sports-action-camera/n/x/f/hero-9-hero-chdhx-901-gopro-original-imafvzw4qhgprxhh.jpeg?q=70",
    title:
      "GoPro Hero9 Sports and Action Camera  (Black, 20 MP)",
    price: 27490,
    decription:
      "You can capture high-quality photos with the help of the GoPro HERO9 Camera. It has a versatile design and can take photographs of a high calibre. In addition, using this camera, you can capture clear still .",
    Pixels: "20 MP",
    SensorType: "CMOS",
    Warranty:
      "1 year international + 1 year local India warranty. For 1 Year extended",
  },
  { 
    id:3,
    img: "https://rukminim2.flixcart.com/image/416/416/kk01pjk0/dslr-camera/f/v/o/eos-1500d-canon-original-imafzfugydh2mjgf.jpeg?q=70",
    title:
      "Canon EOS 1500D DSLR Camera Body+ 18-55 mm IS II Lens  (Black)",
    price: 27490,
    decription:
      "Self-Timer, Type C and Mini HDMI, 9 point AF with 1 centre cross-type AF point, Standard ISO 100 - 6400 (expandable to 12 800), Wi-Fi / NFC supported, Full HD video with fully manual control and selectable frame rates, 1080p recording at 30p, optical viewfinder.",
    Pixels: "24.1 MP",
    SensorType: "CMOS",
    Warranty:
      "1 year international + 1 year local India warranty. For 1 Year extended",
  },
  { 
    id:5,
    img: "https://rukminim2.flixcart.com/image/416/416/juwzf680/dslr-camera/g/a/q/200d-ii-200d-ii-canon-original-imaffvrhzyqzayys.jpeg?q=70",
    title:
      "Canon EOS 200D II DSLR Camera EF-S18-55mm IS STM  (Black)",
    price: 59990,
    decription:
      "Vari-angle Touch Screen LCD, Dual pixel CMOS AF, 3 975 selectable focus positions (Live View), EV -4 focusing limit, Eye Detection AF (One Shot & Servo AF ?Live View), OVF: 9 AF Points, Live View: 3 975 selectable focus positions, Live View: One-Shot AF & Servo AF, Touch Screen,",
    Pixels: "24.1 MP",
    SensorType: "CMOS",
    Warranty:
      "1 year international + 1 year local India warranty. For 1 Year extended",
  },
];


const Camara = () => {
  const[searchItems ,setSearchItems] = useState();
  const { state } = useLocation();
  return (
    <div className="camara-section">
      <Navigation />
      <Sidebar />
      <Main items={Item_details} searchitems = {state}/>
    </div>
  );
};

export default Camara;
