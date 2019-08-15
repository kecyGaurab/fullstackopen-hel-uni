import React from "react";
import "./App.css";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4
      }
    ]
  };
  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course}/>
      
        
      </div>
    );
  };

  const Header = ({ course}) => {
  
    return course.parts.map((part, index) => <p key={index}>{part.name} {part.exercises}</p>);
  };



  return (
    <div>
      <h1>Half Stack application Development</h1>
      <Course course={course} />
    </div>
  );
};

export default App;
