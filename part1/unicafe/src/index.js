import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = props => {
  if (props.all === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <div>all {props.all}</div>
      <div>average {props.average}</div>
      <div>positive {props.positive} %</div>
    </div>
  );
};

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + bad + neutral;
  const average = (good * 1 + bad * -1 + neutral * 0)/all;
  const positive = (good  * 100) / all;
  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <Button onClick={handleGood} text ='good'/>
      <Button onClick={handleNeutral} text ='neutral'/>
      <Button onClick={handleBad} text ='bad'/>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics all={all} average={average} positive={positive} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
