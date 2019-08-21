import React, { useState } from "react";


const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas"
    }
  ]);
  const [newName, setNewName] = useState("");

  const addName = event => {
    event.preventDefault();
    const nameObj = {
      name: newName
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
  };

  //function to handle the onchange value of input
  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const renderPerson = () => {
    return persons.map(person => (
      <div key={person.name}>
        <p>{person.name}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
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
