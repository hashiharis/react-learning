const apiUrl = "https://dummyjson.com/products";

async function getProducts() {
  try {
    const res = await fetch(apiUrl);
    // console.log(res)
    const data = await res.json();
    // console.log(data)
    let productsData = "";

    data.products.map((item) => {
      productsData += `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                     <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
               <p class="card-text">Price:$${item.price}</p>
              <a href="productdetails.html?id=${item.id}" class="btn btn-primary">View More</a>
            </div>
            </div>`;
    });
    document.getElementById("product-cards").innerHTML = productsData;
  } catch (error) {
    console.log("Error fetching the data", error);
  }
}

getProducts();
