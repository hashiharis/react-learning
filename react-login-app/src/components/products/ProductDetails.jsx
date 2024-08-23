import { useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/" + productId
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setProduct(result);
    } catch (error) {
      console.log("Error", error);
    } finally {
      console.log("Api call finished");
    }
  };
  console.log(product)
  
const {rate,count }= product.rating||{};
  return (
    <div className="mx-auto w-50">
      <h1>Product Details</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {product.id && (<div className="mx-auto w-100 mt-5">
        <Card style={{ width: "18rem" }} key={product.id}>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>Price: {product.price}</Card.Text>
            <Card.Text>Category: {product.category}</Card.Text>
            <Card.Text>Rate: {rate}</Card.Text>
            <Card.Text>Count: {count}</Card.Text>
          </Card.Body>
        </Card>
      </div>)}
    </div>
  );
};
