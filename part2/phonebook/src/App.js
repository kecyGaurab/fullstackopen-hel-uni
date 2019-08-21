import React, { useState } from "react";


const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "040-1234567"
    }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = event => {
    event.preventDefault();
    const nameObj = {
      name: newName,
      number:newNumber
    };
    //checks and filters if the name already exists in the persons array
    const doesContactExist = persons.filter(
      person => person.name === nameObj.name
    );
    //  if the returned array is not empty concatanates the name to the persons array
    if (doesContactExist.length !== 0) {
      window.confirm(`${newName} is already in the phonebook`);
    } 
    else {
      setPersons(persons.concat(nameObj)); 
    }
      setNewName('');
      setNewNumber('');
  };

  //function to handle the onchange value of input name
  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const renderPerson = () => {
    return persons.map(person => (
      <div key={person.name}>
        <p>{person.name} {person.number}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          <div>name: <input value={newName} onChange={handleNameChange} /></div>
         <div>number: <input value={newNumber} onChange={handleNumberChange} /></div> 
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{renderPerson()}</div>
    </div>
  );
};

export default App;
