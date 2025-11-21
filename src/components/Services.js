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
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const services = [
    {
      title: "Auction Chit Fund",
      img: chitfund,
      text: "An auction chit fund is a savings system where members contribute monthly and bid to receive the pooled amount. It helps with savings and quick access to funds.",
    },
    {
      title: "Property Loan",
      img: property,
      text: "A property loan allows individuals to buy or construct homes, land, or commercial spaces with flexible repayment options using property as collateral.",
    },
    {
      title: "Daily Business Loan",
      img: dailyloan,
      text: "Daily business loans help with short-term financial needs like inventory or cash flow, with daily repayments suitable for businesses with regular income.",
    },
    {
      title: "Weekly Business Loan",
      img: weeklyloan,
      text: "Weekly business loans provide capital for small businesses with easy weekly repayments and support urgent business needs.",
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
              <Card title={service.title} img={service.img} text={service.text} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn prev" onClick={() => sliderRef.current?.slickPrev()}>
          ‹
        </button>
        <button className="carousel-btn next" onClick={() => sliderRef.current?.slickNext()}>
          ›
        </button>
      </div>
    </div>
  );
}

export default Services;
