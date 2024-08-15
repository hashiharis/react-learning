import { Card } from "../card/Card";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import "./cardcontainer.css";


export const CardContainer = () => {
  return (
    <div className="card-container">
      <Card
        image={img1}
        category="Business"
        title="Overcoming Challenges to make a living online"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        date="7 Feb 2023"
        count="55"
      />
      <Card
        image={img2}
        category="Nutrition"
        title="How to Exercise to achieve your nutrition goals"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        date="12 Aug 2023"
        count="39"
      />
      <Card
        image={img3}
        category="Health"
        title="10 tips to Lose weight quickly without dieting"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        date="21 Dec 2023"
        count="61"
      />
    </div>
  );
};
