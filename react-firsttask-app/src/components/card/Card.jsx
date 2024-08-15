
import './card.css'

// eslint-disable-next-line react/prop-types
export const Card=({image,category,title,description,date,count})=>{
    return( 
    <div className="card-item">
    <img src={image} alt="nature-image" />
    <div className="card-content">
        <p id="category">{category}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <hr />
        <div className="date-section">
            <p className="date">{date}</p>
            <p>{count}</p>
        </div>
        </div>
    </div>
    
)
   
}