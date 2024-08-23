import { Navbar } from "../navbar/Navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [productData, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate=useNavigate()

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      console.log("Api call finished!");
    }
  };
  return (
    <>
      <Navbar />
      <div className="px-5 w-100" style={{ margin: "auto" }}>
        <button onClick={fetchData} style={{ marginTop: "3em" }}>
          Fetch Data
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error:{error.message}</p>}
        <div className="d-flex flex-wrap gap-5 mt-3 justify-content-center">
          {productData.map((item) => (
            <Card style={{ width: "18rem", height: "500px" }} key={item.id}>
              <Card.Img className="h-50" variant="top" src={item.image} />
              <Card.Body
                style={{
                  overflowY: "auto",
                }}
              >
                <Card.Title>
                  {item.title.length > 20
                    ? item.title.substring(0, 20) + "..."
                    : item.title}
                </Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary" onClick={()=>{
                  navigate(`/products/${item.id}`)
                }}>View More</Button>
              </Card.Body>
            </Card>

            // <div  key={item.id}>
            //   <p>{item.title}</p>
            //   <p>Price: {item.price}</p>
            //   <p>Category: {item.category}</p>
            //   <p>{item.description}</p>
            //   <p>Rating: {item.rating.rate}</p>
            //   <p>Count: {item.rating.count}</p>
            //   <img src={item.image} style={{ width: "100%" }} />
            //   <hr />
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};
