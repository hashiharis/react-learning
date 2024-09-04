import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import './mobilesidebar.css';

export const MobileSidebar = () => {



    const sidebarTop=[
        {
          image:"https://zerodha.com/static/images/products/kite-logo.svg",
          title:"Kite"
        },
        {
          image:"https://zerodha.com/static/images/products/console.svg",
          title:"Console"
       },
        {
          image:"https://zerodha.com/static/images/products/kite-connect.svg",
          title:"Connect"
          
        },
        {
          image:"https://zerodha.com/static/images/products/coin.svg",
          title:"Coin"
          
        },
        {
            image:"https://zerodha.com/static/images/products/varsity.png",
            title:"Varsity"
        },
        {
            image:"https://zerodha.com/static/images/products/tqna.png",
            title:"Trading Q&A"
        }
          
      ]

      const sidebarBottom=[
        {
          heading:"Utilities",
          link1:"Brokerage calculator",
          link2:"Margin calculator",
          link3:"Holiday calender",
          link4:"Markets"
      },
      {   heading:"Updates",
          link1:"Z-Connect blog",
          link2:"Pulse News",
          link3:"Circulars/Bulletin",
          link4:"IPOs"
    
      }
    ]
  return (
    <Container className="mobile-sidebar">
     
      <Row>
      <hr />
       {sidebarTop.map((item,index)=>{
        return(
            <Col key={index} xs={6} className="sidebar-images">
                <img src={item.image} alt="" />
                <span>{item.title}</span>
            </Col>
        )
       })}
      </Row>
    
      <Row>
      <hr />
       {
        sidebarBottom.map((item,index)=>{
            return(
                <Col key={index} xs={6} className="sidebar-links">
                    <p id="heading">{item.heading}</p>
                    <p>{item.link1}</p>
                    <p>{item.link2}</p>
                   <p>{item.link3}</p>
                   <p>{item.link4}</p>
                </Col>
            )
        })
       }
      </Row>
    </Container>
  );
};
