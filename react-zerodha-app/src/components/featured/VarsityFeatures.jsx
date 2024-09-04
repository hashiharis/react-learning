
import './varsityfeatures.css'
export const VarsityFeatures=()=>{
    const features=[
        {
        id:1,
        description:"Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.",
        link:"Varsity"

    },
        {
        id:1,
       description:"Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.",
       link:"TradingQ&A"

       }
]

return(
      
      <div className="varsity-features">
        {features.map((item,index)=>{
            return(
                <div key={index} className="feature-points">
                   <p>{item.description}</p>
                   <a href="">{item.link}</a>
                </div>
            )
        })}
      </div>

    )
}