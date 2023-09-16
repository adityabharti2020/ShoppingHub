import "./home.css";
import CarouselCmp from "../carousel/CarouselCmp";
import Electronics from "../Electornics/Electronics";
import { useState } from "react";
const ImagesUrls = [
  {
    url: "https://venngage-wordpress.s3.amazonaws.com/uploads/2021/10/Email-Banner-Furniture-Sale.png",
    id: 1,
  },
  {
    url: "https://img.freepik.com/free-vector/gradient-boutique-design-template_23-2149348648.jpg",
    id: 2,
  },
  {
    url: "https://t4.ftcdn.net/jpg/02/24/88/07/360_F_224880717_YmNbocwrjak9AyvQ9QrTnELWCeOGtKvH.jpg",
    id: 3,
  },
  {
    url: "https://img.freepik.com/free-vector/gradient-supermarket-twitch-banner_23-2149387927.jpg?w=2000",
    id: 4,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoacaqtVhfKtl0K8vLw6uBzqJI9CVW_w_tmznz4ZoaZiAgJ6dwXT-5tjcsFlaKGiS6PLA&usqp=CAU",
    id: 5,
  },
  {
    url: "https://img.freepik.com/premium-psd/horizontal-website-banne_451189-109.jpg",
    id: 6,
  },
  {
    url: "https://img.freepik.com/free-vector/flat-kids-twitch-banner-template_23-2149658118.jpg",
    id: 7,
  },
];
const productDetails = [
  {
    id: 1,
    ProductImg:
      "https://rukminim2.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
    title: "Camara",
    Price: "From $100",
    Brand: "Sony",
    path: "/camara",
  },
  {
    id: 2,
    ProductImg:
      "https://rukminim2.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
    title: "Monitor",
    Price: "From $500",
    Brand: "Lenovo",
    path: "/monitor",
  },
  {
    id: 3,
    ProductImg:
      "https://rukminim2.flixcart.com/flap/200/200/image/20c224cd52ae7a87.jpg?q=70",
    title: "Trimmer",
    Price: "From $500",
    Brand: "philips",
    path: "/trimer",
  },
  {
    id: 4,
    ProductImg:
      "https://rukminim2.flixcart.com/image/200/200/jpmxuvk0/printer-refurbished/z/r/z/u-ts207-canon-original-imafbu3xpytszpgx.jpeg?q=70",
    title: "Printer",
    Price: "From $500",
    Brand: "Lenovo",
    path: "/printer",
  },
  {
    id: 5,
    ProductImg:
      "https://rukminim2.flixcart.com/image/200/200/jzhb24w0/monitor/j/9/s/g-sync-compatible-vg258qr-90lm0453-b01310-asus-original-imafj5gggya9gygk.jpeg?q=70",
    title: "Asus Monitor",
    Price: "From $500",
    Brand: "Asus",
    path: "/powerbank",
  },
  {
    id: 6,
    ProductImg:
      "https://rukminim2.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
    title: "Projector",
    Price: "From $500",
    Brand: "Canon",
    path: "/powerbank",
  },
  
 
];
const Home = (data) => {
  const [image, setimage] = useState(ImagesUrls);
  const [products, setproducts] = useState(productDetails);
  // console.log(image);

  return (
    <>
      <div className="service-container" id="service-container">
        {data.catogories_items.map((newdata, id) => (
          <div className="service-box" id="service-box">
            <div className="sevice-image" id="sevice-image">
              <img src={newdata.img} id="image" key={id} />
            </div>
            <div className="service-title" id="service-title">
              <h5 id="service-heading" key={newdata.id}>
                {newdata.title}
              </h5>
              <img src={newdata.dropDown} id="img1" key={id} />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel">
        <CarouselCmp image={image} />
      </div>
      <div className="electronics-container">
        <Electronics products={products} />
      </div>
    </>
  );
};

export default Home;
