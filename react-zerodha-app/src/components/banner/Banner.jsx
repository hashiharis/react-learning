// import titleData from '../../titleData';
import  './banner.css'
import { BannerTitle } from './BannerTitle';
export const Banner = () => {

    const bannerData={
        title:"Invest in everything",
        subtitle:" Online platform to invest in stocks, derivatives, mutual funds, ETFs,bonds, and more.",
        btntext:"Sign Up Now"
    }
    // const bannerContent=titleData.map((item)=>{
    //     return(
    //         <BannerTitle key={item.id}
    //                      title={item.title}
    //                      subtitle={item.subtitle}
    //                      text={item.btntext}/>
    //     )
    // })
  return (
    <section className="banner-section">
        <img
          className="banner-image"
          src="https://zerodha.com/static/images/landing.png"
          alt="Zerodha, no. 1 stock broker in India"
        />
         <BannerTitle   title={bannerData.title}
                         subtitle={bannerData.subtitle}
                         text={bannerData.btntext}/>
    </section>
  );
};