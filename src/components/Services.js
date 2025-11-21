import Card from "./Card";

import chitfund from "../Autionchitfund.png";
import property from "../Property.png";
import dailyloan from "../dailyloan.png";
import weeklyloan from "../weeklyloan.png";

function Services() {
  const services = [
    {
      title: "Auction Chit Fund",
      img: chitfund,
      text: "An auction chit fund is a savings system where members contribute monthly and bid to receive the pooled amount.",
    },
    {
      title: "Property Loan",
      img: property,
      text: "A property loan allows individuals to buy or construct homes, land, or commercial spaces.",
    },
    {
      title: "Daily Business Loan",
      img: dailyloan,
      text: "Daily business loans help with short-term financial needs like inventory or cash flow.",
    },
    {
      title: "Weekly Business Loan",
      img: weeklyloan,
      text: "Weekly business loans provide capital for small businesses with easy weekly repayments.",
    },
  ];

  return (
    <div className="container services" id="services">
      <div className="services-header">
        <h2 className="main-title text-center">OUR SERVICES</h2>
        <p className="services-subtitle text-center">
          Comprehensive financial solutions tailored to your needs.
        </p>
      </div>

      {/* New fixed 2-column layout */}
      <div className="services-grid">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            img={service.img}
            text={service.text}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
