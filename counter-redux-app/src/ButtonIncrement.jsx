import { useDispatch } from "react-redux"
import { decrementByAmount, incrementByAmount } from "./redux/counterslice/counterSlice"
import { useState } from "react"

export const ButtonIncrement=()=>{

    const [value,setValue]=useState(0)
 const dispatch=useDispatch()


 const handleChange=(e)=>{
  setValue(e.target.value)
    
 }
    const handleIncrement=()=>{
         dispatch(incrementByAmount(parseInt(value)))
    }
    const handleDecrement=()=>{
        dispatch(decrementByAmount(parseInt(value)))
    }
    return(
        <div>
            <input type="number" onChange={handleChange}/>
            <button onClick={handleIncrement}>Increment By Amount</button>
            <button onClick={handleDecrement}>Decrement By Amount</button>
        </div>
    )
}