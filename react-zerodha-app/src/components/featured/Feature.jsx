// eslint-disable-next-line react/prop-types
export const Feature=({subtitle,description})=>{
    return(
        <div className="feature">
            <div className="feature-item">
              <h4>{subtitle}</h4>
              <p>{description}</p>
            </div>
    </div> 
    )
}