import { useState} from "react";
import { useInterval } from "./useInterval";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {

  

  // }, [url]);

  
  const fetchData=async()=>{
    try{
        const response= await fetch(url);
        console.log("Response=>",response)
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
       const result=await response.json()
       setData(result)
       console.log("Result=>",result)
    }catch(error){
      console.log("Fetch error=>",error)
      setError("Something went wrong")
    }finally{
      setLoading(false);   
    }
   
}
useInterval(fetchData,url)
return{data,loading,error}


}

