import { useFetch } from "./hooks/customhooks/useFetch.js"

export const FetchComponent=()=>{
    const {data,loading:isLoading,error}=useFetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("From Component Error",error)
    return (
        <>
        {isLoading&&<div>Loading...</div>}
        {error && <div>Error:{error}</div>}
        <h1>{data?.title}</h1>
        </>
    )
}
// 'https://jsonplaceholder.typicode.com/todos/1'