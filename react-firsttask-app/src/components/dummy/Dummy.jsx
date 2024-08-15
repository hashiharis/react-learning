import { useState } from "react"

export const Dummy=()=>{
    const [name,setName]=useState(false)

    const handleName=()=>{
        setName(true)
    }
    const handleResetName=()=>{
        setName(false)
    }
return(
<div>
    <h1>{name ? "Admin Page":"User Page"}</h1>
    <button onClick={handleName}>Admin</button>
    <button onClick={handleResetName}>User</button>
</div>
)
}