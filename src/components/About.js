import Logo from '../Logo.png';

function About() {
  return (
    <>
      <div
        style={{ marginTop: "0", width: "100%", height: "1px" }}
        className="about-scroll"
        id="about-scroll"
      ></div>

      <div className="container about">
        <div className="row about-row">
          <div className="col-md-6 text-center about-image">
            <img 
              alt="Finance team working together" 
              src={Logo} 
              className="img-fluid" 
              loading="lazy"
              onError={(e) => {
                e.target.src = Logo;
              }}
            />
          </div>
          <div className="col-md-6 about-content">
            <h2 className="main-title about-h2">ABOUT US</h2>
            <p className="main-p">
             Sri Ranga Finance Services, founded by Mr. Thiyagaraja R, is a trusted and customer-focused financial institution dedicated to supporting individuals and small businesses. 
             The company offers flexible Weekly Business Loans and Daily Business Loans, designed to help traders, self-employed individuals, and small business owners maintain consistent
              cash flow and manage daily operations smoothly. With quick processing, minimal documentation, and a customer-first approach, Sri Ranga Finance Services ensures that financial 
              support is easily accessible for those who need it most. Their transparent process and reliable service have helped them earn the trust of many business owners.
            </p>
            <p className="main-p">
             In addition to business loans, the company provides secure Property Loans for customers looking to utilize real estate for financial needs.
             Sri Ranga Finance Services also operates a safe and well-managed Action Chit Fund, encouraging disciplined savings while offering the opportunity to access funds when required.
              With strong leadership and a commitment to integrity, 
             the company continues to deliver practical, hassle-free financial solutions for the community.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3 className="stat-number">5+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">2K+</h3>
                <p className="stat-label">Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">1c+</h3>
                <p className="stat-label">Assets Managed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
