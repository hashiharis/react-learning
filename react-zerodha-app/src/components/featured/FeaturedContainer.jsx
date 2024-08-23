// import valuesData from "../../valuesData"
// import varsityData from "../../varsityData"
// import { Feature } from "./Feature"
import { Images } from "../Image/Images";
import { Featured } from "./Featured";

export const FeaturedContainer = () => {
  // const featureList=valuesData.map((item)=>{
  //   return(
  //     <Featured key={item.id}
  //               featureTitle={item.title}
  //               featureDescription={item.description}/>
  //   )
  // })

  // console.log(featureList)
  const logoImages = [
    {
      image: "https://zerodha.com/static/images/press-logos.png",
    },
    { image: "https://zerodha.com/static/images/press-logos.png" },
    {
      image: "https://zerodha.com/static/images/press-logos.png",
    },
    {
      image: "https://zerodha.com/static/images/press-logos.png",
    },
    {
      image: "https://zerodha.com/static/images/press-logos.png",
    },
  ];

  const publisherSection = logoImages.map((item) => {
    return <Images key={item.id} image={item.image} />;
  });
  return (
    <section className="featured-container">
      <div>
        <Featured />
      </div>
      <div> {/* <Image/> */}
        {publisherSection}
      </div>
    </section>
  );
};
