import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./desktopsidebar.css";


export const DesktopSidebar = () => {

  const sidebarTop=[
    {
      image:"https://zerodha.com/static/images/products/kite-logo.svg",
      title:"Kite",
      subtitle:"Trading platform"
    },
    {
      image:"https://zerodha.com/static/images/products/console.svg",
      title:"Console",
      subtitle:"Backoffice"
    },
    {
      image:"https://zerodha.com/static/images/products/kite-connect.svg",
      title:"Connect",
      subtitle:"Trading APIs"
    },
    {
      image:"https://zerodha.com/static/images/products/coin.svg",
      title:"Coin",
      subtitle:"Mutual Funds"
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

const sidebarRight=[
  {
    title:"Education",
    image:"https://zerodha.com/static/images/products/varsity.png",
    subtitle:"Varsity"
  },
  {
    title:" ",
    image:"https://zerodha.com/static/images/products/tqna.png",
    subtitle:"Trading Q&A"
  }
]
  return (
    <Container className="desktop-sidebar">
      <Row className="sidebar-top">
        {
          sidebarTop.map((item,index)=>{
            return(
            <Col key={index}>
               <div><img src={item.image} alt="" /></div>
               <div className="title-top-column">{item.title}</div>
               <div className="subtitle-top-column">{item.subtitle}</div>
        </Col>
            )
          })
        }
      </Row>
      <Row className="sidebar-bottom">
        {
          sidebarBottom.map((item,index)=>{
            return(
              <Col key={index} className="bottom-columns">
                  <h6 className="bottom-title">{item.heading}</h6>
                  <div>{item.link1}</div>
                  <div>{item.link2}</div>
                  <div>{item.link3}</div>
                  <div>{item.link4}</div>
              </Col>
            )
          })
        }
      {
        sidebarRight.map((item,index)=>{
          return(
            <Col lg={2}key={index} className="bottom-columns bottom-second">
               <h6 className="bottom-title no-title">{item.title}</h6>
               <div><img src={item.image} alt="" /></div>
               <div>{item.subtitle}</div>
            </Col>
          )
        })
      }
      </Row>
    </Container>
  );
};
