import featureData from "../../featureData"
import './feature.css'

export const Feature=()=>{
    return(
      <>
        {featureData.map((item,index)=>{
          return(
            <div className="feature"  key={index}>
            <div className="feature-item">
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
    </div>
          )
        })
          
        } 
      </>
    )
}