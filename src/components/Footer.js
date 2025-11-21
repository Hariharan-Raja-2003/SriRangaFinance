import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Sri Ranga Finance</h1>
                <p className="footer-text">
                  Your trusted financial partner for over 5+ years. We provide comprehensive 
                  financial solutions to help individuals and businesses achieve their financial goals 
                  and secure their future.
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <a href="mailto:srirangafinance@gmail.com">srirangafinance2024@gmail.com</a>
                  </li>
                
                  <li>
                    <a href="tel:+15551234567">+91 999947 97148</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Follow Us</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#" > LinkedIn</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="#"> Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
