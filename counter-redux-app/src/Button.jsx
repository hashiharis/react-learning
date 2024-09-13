import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/counterslice/counterSlice"

export const Button=()=>{
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
    return(
        <>
            <span>{`Count ${count}`}</span>
            <button onClick={()=>dispatch(increment())}>Add</button>
            <button onClick={()=>dispatch(decrement())}>Decrease</button>
        </>
    )
}