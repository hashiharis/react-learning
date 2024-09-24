import { useEffect } from "react";

export const useInterval = (apiCall, url) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      apiCall()
      console.log("From interval=>");
    }, 10000);
    return () => clearInterval(intervalId);
  }, [apiCall, url]);
};
