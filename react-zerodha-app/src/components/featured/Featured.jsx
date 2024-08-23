// import featureData from "../../featureData";
import valuesData from "../../valuesData";
import varsityData from "../../varsityData";
import { Feature } from "./Feature";
import "./featured.css";


export const Featured=()=>{ 

 
    const updArr=[...valuesData,{
        id:"benefits",
        isBenefits:true
    },{
        id:"training",
        istraining:true
    }]
    console.log("New array",updArr)
    const training=varsityData.map((item)=>{
        return(
            <Feature key={item.id}
                      subtitle={item.subtitle}
                      description={item.description}/>
        )
        
    })

    // const benefits=featureData.map((item)=>{
    //     return(
    //      <Feature  key={item.id}
    //             subtitle={item.subtitle}
    //              description={item.description}
    //      />
    //     )
    // })

    return(
        <div>
        {
            updArr.map((item)=>{
                return(
                    <div className="feature-list" key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    {item.istraining&&<div className="training">{training}</div>}
                </div>
                )
               
            })
        }
        </div>
      

    )
}
