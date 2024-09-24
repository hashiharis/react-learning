import { useOnline } from "./hooks/customhooks/useOnline";
export const OnlineChecking=()=>{
    const isOnline=useOnline();
    return(
        <div>
      {
        isOnline? (<p>You are online</p>):(<p>You are offline</p>)
      }
        </div>
    )
}