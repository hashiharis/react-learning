const products=[
    {
        id:1,
        productName:"Half sleeve Floral Print T-shirt",
        ownerFirstName:"Ritu",
        ownerLastName:"Sharma",
        category:"Men's Clothing",
        price:2500,
        state:"Maharashtra",
        discount:5
        
    },
    {
        id:2,
        productName:"Kalankari Printed Kurta",
        ownerFirstName:"Raj",
        ownerLastName:"Tyagi",
        category:"Women's Clothing",
        price:2000,
        state:"Rajasthan",
        discount:10
        
    },
    {
        id:3,
        productName:"Silk Saree",
        ownerFirstName:"Seetha",
        ownerLastName:"Krishnan",
        category:"Women's Clothing",
        price:10000,
        state:"Tamil Nadu",
        discount:5
        
    },
    {
        id:4,
        productName:"Cotton Tusser Fabric Shirt",
        ownerFirstName:"Seetha",
        ownerLastName:"Krishnan",
        category:"Men's Clothing",
        price:4000,
        state:"Tamil Nadu",
        discount:10
        
    },
    {
        id:5,
        productName:"Nike-Full Sleeve Blue Hoodie",
        ownerFirstName:"Manuel",
        ownerLastName:"Mathew",
        category:"Men's Clothing",
        price:10000,
        state:"Delhi",
        discount:20
        
    },
    {
        id:6,
        productName:"Anarkali Kurti",
        ownerFirstName:"Raj",
        ownerLastName:"Tyagi",
        category:"Women's Clothing",
        price:1000,
        state:"Rajasthan",
        discount:10
        
    },
    {
        id:7,
        productName:"Baggy Jeans",
        ownerFirstName:"Manuel",
        ownerLastName:"Mathew",
        category:"Men's Clothing",
        price:1500,
        state:"Delhi",
        discount:2
        
    },
    {
        id:8,
        productName:"Organza Dupatta",
        ownerFirstName:"Ritu",
        ownerLastName:"Sharma",
        category:"Women's Clothing",
        price:1000,
        state:"Maharashtra",
        discount:2
    },
    {
        id:9,
        productName:"Kerala Kasavu Mundu",
        ownerFirstName:"Beena",
        ownerLastName:"Kannan",
        category:"Men's Clothing",
        price:2000,
        state:"Kerala",
        discount:5
        
    },
    {
        id:10,
        productName:"Kerala Set Saree",
        ownerFirstName:"Beena",
        ownerLastName:"Kannan",
        category:"Women's Clothing",
        price:2000,
        state:"Kerala",
        discount:10
        
    }

]

const menClothing=products.filter((product,index,productsArr)=> product.category==="Men's Clothing")

const kerala=products.filter((product,index,productArr)=>product.state==="Kerala")

console.log("Clothes from Kerala",kerala)


const totalPrice=products.reduce((acc,product)=>{
         return acc+=product.price
},0)

console.log("Total Price",totalPrice)

const fullName=products.map((product,i,productArr)=> `${product.ownerFirstName} ${product.ownerLastName}`)

console.log(fullName)

const reducedPrice=products.map((product,i,productArr)=>product.price-product.discount)

console.log("Discounted Price:",reducedPrice)