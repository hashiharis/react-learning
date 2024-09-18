import { useEffect, useMemo, useState } from "react";

export const Products = () => {
  const [productsData, setProductsData] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [dark,setDark]=useState(true);

  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      if (!data.status === 200) {
        throw Error("Unable to retrieve products data");
      } else {
        const response = await data.json();
        // console.log(response)
        setProductsData(response.products);
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("API call is finished!!!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleFilter = () => {
    console.log(categoryValue);
    return productsData.filter((p) => p.category === categoryValue);
  };


  const filteredData = useMemo(() => {
    return handleFilter();
  }, [categoryValue]);


//   console.log(filteredData);

  const uniqueCategory = [...new Set(productsData.map((p) => p.category))];

  const handleCategory = (e) => {
    const { value } = e.target;
    setCategoryValue(value);
    console.log(categoryValue)
  };

  const themeStyles={
    backgroundColor:dark?"white":"#000033",
    color:dark?"black":"white",
    display: "flex", 
    justifyContent: "space-evenly" 
  }
  return (
    <div style={themeStyles}>
      <div className="products-container">
        <table style={{ border: "1px solid black" }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {(filteredData && filteredData.length > 0
              ? filteredData
              : productsData
            ).map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.title}</td>
                  <td>{product.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <select onChange={handleCategory}>
          {uniqueCategory.map((product, index) => (
            <option key={index} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>
      <div> 
        <button onClick={()=>{setDark(prev=>!prev)}}>Change Theme</button>
        </div>
     
    </div>
  );
};
