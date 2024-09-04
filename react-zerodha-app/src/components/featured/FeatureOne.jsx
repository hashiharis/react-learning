import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Feature } from "./Feature";
import "./featureone.css";

export const FeatureOne = () => {
  return (
    <Container className="feature-one">
      <Row>
        <Col lg={5} md={12} xs={12} className="feature-one-left">
          <h2 style={{ color: "#424242", marginBottom: "1em" }}>
            Trust with Confidence
          </h2>
          <Feature />
        </Col>
        <Col lg={7} md={12} xs={12}>
          <img
            className="feature-one-image"
            src="https://zerodha.com/static/images/ecosystem.png"
            alt=""
          />
          <div className="links">
            <a href="">Explore our Products</a>
            <a href="">Try Kit demo</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
