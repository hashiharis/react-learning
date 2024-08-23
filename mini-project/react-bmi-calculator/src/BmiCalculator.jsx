/* eslint-disable no-unused-vars */
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
    setBmi((weight / (height * height)) * 10000);
    console.log("Inside",bmi)
    if (bmi < 18.5) {
      setCategory((prevCategory)=>"Underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory("Normal Weight");
    } else if (bmi >= 20 && bmi <= 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
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
