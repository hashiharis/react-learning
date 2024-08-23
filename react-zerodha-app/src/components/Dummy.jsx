import "./dummy.css";
/* eslint-disable react/prop-types */
export const Dummy = ({ title, subtitle, description, image }) => {
  console.log({ title, subtitle, description, image });
  return (
    <section className="dummy-section">
      <div className="features">
        <div className="featured-items">
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{description}</p>
        </div>
        <div className="dummy-imagesection">
          <img src={image} alt="" className="dummyImg" />
        </div>
      </div>
    </section>
  );
};
