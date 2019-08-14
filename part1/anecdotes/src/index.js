import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
);

const App = props => {
  const points = Array.apply(null, Array(6)).map(Number.prototype.valueOf, 0);

  const [selected, setSelected] = useState(0); //2,34,
  const [votes, setVote] = useState(points);

  // generates random number and store in a state
  const nextAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    setSelected(randomNumber);
  };

  //displays the vote of current anecdote

  //
  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVote(copy);
  };

  const DisplayHighest = () => {
    const highestVote = Math.max(...votes);
    const highestVotesPos = votes.indexOf(highestVote);

    return (
      <div>
        <h2>Anecdote with most votes</h2>
        {anecdotes[highestVotesPos]} <i>has {highestVote} votes</i>
      </div>
    );
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>
        <i>has {votes[selected]} votes </i>
      </p>

      <Button onClick={handleVote} text="vote" />
      <Button onClick={nextAnecdote} text="next anecdote" />
      <DisplayHighest />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
