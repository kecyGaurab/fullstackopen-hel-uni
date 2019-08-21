import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  // adds name to the 'persons' array 
  const addName = (event) =>{
    event.preventDefault(); // prevents the default action of form being submitted
    const nameObj = {
      name: newName
    }
    setPersons(persons.concat(nameObj));
    setNewName(' ') // empties the input field
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)}

  // maps persons array, adds name and renders the name
  const renderPerson = () => {
    return(persons.map(person =>
    <div key={person.name}>{person.name} </div>))
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName}
          onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {renderPerson()}
    </div>
  )
}

export default App