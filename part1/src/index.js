import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  );
};

const Part1 = props => {
  return (
    <div>
      <p><b>{props.parts[0].name}</b></p>
      <p>Number of exercises:{props.parts[0].exercises}</p>
    </div>
  );
};
const Part2 = props => {
  return (
    <div>
      <p><b>{props.parts[1].name}</b></p>
      <p>Number of exercises:{props.parts[1].exercises}</p>
    </div>
  );
};
const Part3 = props => {
  return (
    <div>
      <p><b>{props.parts[2].name}</b></p>
      <p>Number of exercises:{props.parts[2].exercises}</p>
    </div>
  );
};

const Content = props => {
  return (
    <div>
      <Part1 parts={props.parts} />
      <Part2 parts={props.parts} />
      <Part3 parts={props.parts} />
    </div>
  );
};

const Total = props => {
  return (
    <div>
      <p>
        <i>
        Total exercises:{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
          </i>
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",

    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },

      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <h1>
        <Header course={course.name} />
      </h1>
      <p>
        <Content parts={course.parts} />
      </p>
      <p>
        <Total parts={course.parts} />
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
