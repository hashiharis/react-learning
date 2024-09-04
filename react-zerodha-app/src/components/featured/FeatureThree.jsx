import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { VarsityFeatures } from "./VarsityFeatures"
import './featurethree.css'

export const FeatureThree=()=>{
    return(
        <Row className="feature-three" style={{marginTop:"8em"}}>
            <Col lg={6} md={12} xs={12}>
                <div className="varsity-image">
                    <img src="https://zerodha.com/static/images/index-education.svg" alt="varsity"  />
                </div>
            </Col>
            <Col lg={6} md={12} xs={12}>
            <div className="education">
                <h4>Free and open market education</h4>
                <VarsityFeatures/>
            </div>
        </Col>

        </Row>
    )
}