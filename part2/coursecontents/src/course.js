import React from "react";

const Course = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  //function to create header
  const header = x => courses[x].name;

  // function that loops through the array to create content of the course
  const content = x =>
    courses[x].parts.map((part, index) => {
      return (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      );
    });

  // function that gives the total number of exercises of the course
  const total = x =>
    courses[x].parts.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0);

  const Header0 = () => (
    <div>
      <b>{header(0)}</b>
    </div>
  );
  const Header1 = () => (
    <div>
      <p>
        <b>{header(1)}</b>
      </p>
    </div>
  );

  const Content0 = () => <div>{content(0)}</div>;
  const Content1 = () => <div>{content(1)}</div>;
  const Total0 = () => <div>Total of {total(0)} exercises</div>;
  const Total1 = () => <div>Total of {total(1)} exercises</div>;

  return (
    <div>
      <Header0 />
      <Content0 />
      <Total0 />
      <Header1 />
      <Content1 />
      <Total1 />
    </div>
  );
};

export default Course;
