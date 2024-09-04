import { useEffect } from "react"
import { useState } from "react"

export const Validation=()=>{

    const[status,setStatus]=useState("")
    const[password,setPassword]=useState("")
//Use case when component updates 
    useEffect(()=>{
        if(password.length>=8){
            setStatus("strong")
        }
        else{
            setStatus("weak")
        }
    },[password])
    return(
     <>
    <input type="text" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}}/>
    {status}
    </> 
    )
}