import { Fragment } from "react";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [Message, setmessage] = useState("");

  let calbci = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("enter a valid weight or height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));
      if (bmi < 18.5) {
        setmessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setmessage("You are a healthy weight");
      } else {
        setmessage("You are overweight");
      }
    }

   
  };
  let reload = () => {
    window.location.reload();
  };
  return (
    <div className="app">
      <div className="container">
        <h1 className="head">BMI Calculator</h1>
        <form className="calcy" onSubmit={calbci}>
          <label className="inname">Body Weight in Kg</label>
          <input
            className="intex"
            type="text"
            placeholder="Enter body weight"
            onChange={(e) => setWeight(e.target.value)}
          />
          <label className="inname">Height in Meter</label>
          <input
            className="intex"
            type="text"
            placeholder="Enter height"
            onChange={(e) => setHeight(e.target.value)}
          />
          <div className="btn">
          <button  type="submit">Submit</button>
          <button type="submit" onClick={reload}>Reload</button>
          </div>
          <h3 className="val">Your BMI is : {bmi}</h3>
          <h3 className="msg">{Message}</h3>
        </form>
      </div>
    </div>
  );
}

export default App;
