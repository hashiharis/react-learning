
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import { FeatureOne } from './FeatureOne';
import './featuredwrapper.css'
import { FeatureTwo } from './FeatureTwo';
import { FeatureThree } from './FeatureThree';
import { BannerTitle } from '../banner/BannerTitle';


export const FeaturedWrapper = () => {

  const details={
    id:1,
    title:"Open a Zerodha account",
    subtitle:"Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.",
    text:"Sign Up Now"

  }

  return (
    <Container className="featured-container">
      <Row>
        <FeatureOne/>
      </Row>
      <Row lg={12}md={12} xs={12}>
        <div>
        <img className="mediaImg"src="https://zerodha.com/static/images/press-logos.png" alt="list of medias" />
        </div>
    
      </Row>
      <Row>
        <FeatureTwo/> 
      </Row>
      <Row>
        <FeatureThree/>
      </Row>
      <Row className="account-signup">
        <BannerTitle title={details.title}
                      subtitle={details.subtitle}
                      text={details.text}/>
      </Row>
    </Container>
  );
};
