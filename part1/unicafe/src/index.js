import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good+neutral+bad;
  const average = (good*1+neutral*0+bad*(-1))/(good+neutral+bad);
  const positive = good/all*100;

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>

      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>

      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive feedbacks {positive} % </p>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
