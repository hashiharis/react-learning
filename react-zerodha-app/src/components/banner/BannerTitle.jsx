/* eslint-disable react/prop-types */
import './bannertitle.css'
export const BannerTitle=({title,subtitle,text})=>{
    return(
        <div className='banner-title'>
        <h1>{title}</h1>
        <h5>
       {subtitle}
        </h5>
        <button id="signup">{text}</button>
      </div>
    )
}