import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./footer.css";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="d-flex mt-5">
          <Col xs={12} lg={3}className="first-section">
            <div className="img-logo">
              <img src="https://zerodha.com/static/images/logo.svg" alt="" />
            </div>
            <div className="copyright">
              <p>© 2010 - 2024, Zerodha Broking Ltd.</p>
              <p>All rights reserved.</p>
            </div>
            <div className="icon-first-container">
              <ul className="icons">
                <li>
                  <a href="https://twitter.com/zerodhaonline">
                    <img
                      src="	https://zerodha.com/static/images/x-twitter.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/zerodha.social">
                  <IoLogoFacebook size="20px"
      color="#666"/>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/zerodhaonline/">
                  <FaInstagram size="20px"
      color="#666"/>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/zerodha">
                  <FaLinkedinIn size="20px"
      color="#666"/>
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <div>
              <ul className="icons-bottom">
                <li>
                  <a href="https://www.youtube.com/@zerodhaonline">
                    <img
                      src="	https://zerodha.com/static/images/youtube.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
                    <img
                      src="https://zerodha.com/static/images/whatsapp-logo.svg"
                      alt=""
                      style={{width:"100%",maxHeight:"20px"}}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/zerodhain">
                  <FaTelegram size="20px"
      color="#666"/>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} lg={3}className="column">
            <div>Company</div>
            <div>
              <a href="">About</a>
            </div>
            <div>
              <a href="">Products</a>
            </div>
            <div>
              <a href="">Pricing</a>
            </div>
            <div>
              <a href="">Referral Programme</a>
            </div>
            <div>
              <a href="">Careers</a>
            </div>
            <div>
              <a href="">Zerodha.tech</a>
            </div>
            <div>
              <a href="">Press & media</a>
            </div>
            <div>
              <a href="">Zerodha Cares (CSR)</a>
            </div>
          </Col>
          <Col xs={12} lg={3}className="column">
            <div>Support</div>
            <div>
              <a href="">Contact us</a>
            </div>
            <div>
              <a href="">Support Portal</a>
            </div>
            <div>
              <a href="">Z-Connect blog</a>
            </div>
            <div>
              <a href="">List of charges</a>
            </div>
            <div>
              <a href="">Downloads & resources</a>
            </div>
            <div>
              <a href="">Videos</a>
            </div>
            <div>
              <a href="">Market overview</a>
            </div>
            <div>
              <a href="">How to file a complaint?</a>
            </div>
            <div>
              <a href="">Status of your complaints</a>
            </div>
          </Col>
          <Col xs={12} lg={3}className="column">
            <div>Account</div>
            <div>
              <a href="">Open an Account</a>
            </div>
            <div>
              <a href="">Fund Transfer</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
