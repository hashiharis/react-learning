
import { useState } from "react";
import "./bmi.css";
import { BmiTable } from "./BmiTable";

export const BmiCalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [category, setCategory] = useState("");

  const bmiCalculate = (e) => {
    e.preventDefault();
    if (!height && !weight) {
      alert("enter value");
      return;
    }
    let calculateBmi=(weight / (height * height)) * 10000;
    setBmi(calculateBmi);
    // console.log("Inside",bmi)
    let calculatedCategory=""
    if (calculateBmi < 18.5) {
        calculatedCategory="Underweight";
    } else if (calculateBmi >= 18.5 && calculateBmi <= 24.9) {
       calculatedCategory="Normal Weight";
    } else if (calculateBmi >= 20 && calculateBmi <= 29.9) {
       calculatedCategory="Overweight";
    } else {
       calculatedCategory="Obese";
    }

    setCategory(calculatedCategory)
   
  };


  console.log("Outside",bmi);

  // console.log(category);
  return (
    <div className="bmi-wrapper">
      <h1>BMI Calculator</h1>
      <form className="input-section" onSubmit={bmiCalculate}>
        <label htmlFor="">Height</label>
        <input
          type="number"
          placeholder="Height(in cm)"
          onChange={(e) => setHeight(e.target.value)}
        />
        <br></br>
        <label>Weight</label>
        <input
          type="number"
          placeholder="Weight(in kg)"
          onChange={(e) => setWeight(e.target.value)}
        />
        <br></br>
        <button type="submit">Calculate</button>
        {bmi ? <p>Your BMI value is {Math.round(bmi*10)/10}  Your are in {category} category</p> : null}
      </form>
      <hr />
      <BmiTable />
    </div>
  );
};
