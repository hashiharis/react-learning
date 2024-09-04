import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Images } from "../Image/Images";

export const FeatureTwo = () => {
  return (
    <Container>
      <Row>
        <Col lg={5} md={12} xs={12}>
          <h2>Unbeatable pricing</h2>
          <p style={{marginTop:"1em"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          {/* <a href="">See pricing</a> */}
        </Col>
        <Col>
        <Images/>
        </Col>
      </Row>
      <Row><a href=""style={{textDecoration:"none"}}>See pricing</a></Row>
    </Container>
  );
};
