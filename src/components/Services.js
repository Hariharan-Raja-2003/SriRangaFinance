import { useRef } from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chitfund from "../Autionchitfund.png";
import property from "../Property.png";
import dailyloan from "../dailyloan.png";
import weeklyloan from "../weeklyloan.png";

function Services() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const services = [
    {
      title: "Auction Chit Fund",
      img: chitfund,
      text: "An auction chit fund is a savings system where members contribute monthly and the total amount is auctioned. The person who bids the lowest amount receives the chit, and the remaining money is shared as a dividend among all members. It helps people save regularly while offering quick access to funds.",
    },
  
    {
      title: "Property Loan",
      img: property,
      text:"A property loan provides financial support for purchasing or constructing a home, land, or commercial space. It offers flexible repayment options and competitive interest rates. Borrowers can use their property as collateral to access higher loan amounts, making it a reliable option for achieving real estate goals.",
    },
    {
      title: "Daily Business Loan",
      img: dailyloan,
      text: "A daily business loan provides short-term funding to support everyday business needs such as inventory, cash flow, or operational expenses. Repayments are made daily, making it suitable for businesses with regular income. It helps small businesses manage financial gaps and manage business comitements.",
    },

    {
      title: "Weekly Business Loan",
      img: weeklyloan,
      text: "A weekly business loan provides short-term funding with repayments made every week, making it ideal for businesses with weekly income. It helps manage cash flow and handle urgent financial needs. This loan supports small businesses by offering quick access to capital without long-term financial pressure.",
    },
  ];

  return (
    <div className="container services" id="services">
      <div className="services-header">
        <h2 className="main-title text-center">OUR SERVICES</h2>
        <p className="services-subtitle text-center">
          Comprehensive financial solutions tailored to your needs
        </p>
      </div>
      <div className="card-cover">
        <Slider ref={sliderRef} {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-slide">
              <Card
                title={service.title}
                img={service.img}
                text={service.text}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="carousel-controls">
        <button
          className="carousel-btn prev"
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className="carousel-btn next"
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default Services;
