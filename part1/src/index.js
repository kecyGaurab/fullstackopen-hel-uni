import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
    return (
      <div>
        <p>Hello world</p>
      </div>
    )
  }
const WhatUp = () => {
    return (
      <div>
        <p>what up!</p>
      </div>
    )
  }

const User = {
    firstname: 'Jack',
    lastname : 'Mack'
}

function nameHim(User) {
    return User.firstname +' '+ User.lastname;
}

  const App = () => {
    return (
      <div>
        <h1>Greetings</h1>
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello /> <span><WhatUp />  {nameHim(User)} </span>

      </div>
    )
  }
  
ReactDOM.render(<App />, document.getElementById('root'))