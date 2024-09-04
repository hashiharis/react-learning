
import Row from 'react-bootstrap/esm/Row'
import './images.css'
import Col from 'react-bootstrap/esm/Col'
export const Images=()=>{

    const pricingSection=[
        {
           id:1,
           image:"https://zerodha.com/static/images/pricing-eq.svg",
           tag:"Free account opening"
        },
        {
            id:1,
            image:"https://zerodha.com/static/images/pricing-eq.svg",
            tag:"Free equity delivery and deliver mutual funds"
         },
         {
            id:1,
            image:"	https://zerodha.com/static/images/other-trades.svg",
            tag:"Intraday and F&O"
         }
]
    return(
       
        <Row className="images-container">
            {pricingSection.map((item,index)=>{
                return(
                    <Col lg={4} md={4} xs={12} key={index} className="images">
                    <img src={item.image} alt="" />
                    <p>{item.tag}</p>
                    </Col>
                )
            })}
           
        </Row>
    )
}