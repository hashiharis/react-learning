import { useEffect } from "react"
import { useState } from "react"

export const ProductsAPI=()=>{

    const [products,setProducts]=useState([])
// Use case of component on mount state.
    useEffect(()=>{
      getProductsData()
    },[])
  
    const getProductsData=async()=>{
        try{
            const response=await fetch("https://dummyjson.com/products")
            if(!response.status===200){
             throw new Error("Unable to retrive products data!!!")
            }
           const data=await response.json()
           setProducts(data.products)
    

        }
        catch(error){
            console.log(error)
        }
        finally{
            console.log("API call finished")
        }
    }
    return(
        <>
        <ol style={{listStyle:"none"}}>
        {products.map((p,index)=>{
            return(
                <li key={index}>
                    <h6>{p.title}</h6>
                    </li>
            )
        })}
        </ol>
       

</>
    )
}