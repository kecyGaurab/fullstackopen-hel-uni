import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = (props) => {
  if (props.all === 0){
    return (<div>
      No feedback given
    </div>)
  }
return (<div>
  <div>all {props.all}</div>
  <div>average {props.average} %</div>
</div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good+bad+neutral;
  const average = (good*1+bad*(-1)+neutral*0)*100/all;

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>

      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>

      <button onClick={() => setBad(bad + 1)}>bad</button>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics all = {all} 
       average = {average}/>
      

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
