

const apiUrl="https://dummyjson.com/products";

async function getProdDetails(){
    try{

        const res= await fetch(apiUrl)
        const data=await res.json()
        console.log(data)
        printProductDetails(data)

    }catch(error){
        console.log("Error fetching data",error)
    }
}

getProdDetails()

function getProductIdfromUrl(){
    const urlParams=new URLSearchParams(window.location.search)
    return urlParams.get('id');
}


// console.log(id)

function printProductDetails(product){
    getProductIdfromUrl()
    const param=getProductIdfromUrl();
    const detail=product.products.find(i=>i.id===parseInt(param))
    console.log("Details",detail)
    let productDetails=""
    const{id,title,category,price,rating1,availabilityStatus,reviews,images}=detail;
    const [first]=images;
    const [firstReview]=reviews;
    const{comment}=firstReview
    console.log("Reviews",firstReview)
    // console.log(title)
    productDetails+= `<div class="card" style="width: 18rem;">
                    <img src="${first}" class="card-img-top" alt="..."  style="width:100px">
                    <div class="card-body">
                        <h5 class="card-title">Product Id:${id}</h5>
                        <p class="card-text">Product Title:${title}</p>
                        <p class="card-text">Product Catgeory:${category}</p>
                        <p class="card-text">Price:${price}</p>
                        <p class="card-text">Rating:${rating1}</p>
                        <p class="card-text">Availability:${availabilityStatus}</p>
                        <p class="card-text">Comment:${comment}</p>
                    </div>
                </div>
                    
    `
    
    
  

    document.getElementById("product-details").innerHTML=productDetails
}
