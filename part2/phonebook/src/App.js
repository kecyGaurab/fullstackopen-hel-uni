import React, {useState, useEffect} from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import PersonList from './PersonList';
import numberService from './services/numbers';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredName, setFilter] = useState('');

  useEffect(() => {
    numberService.getAll().then(initialNumbers => {
      setPersons(initialNumbers);
    });
  }, []);

  const addName = event => {
    event.preventDefault();
    const nameObj = {
      name: newName,
      number: newNumber,
    };
    //checks and filters if the name already exists in the persons array
    const doesContactExist = persons.filter(
      person => person.name === nameObj.name
    );
    //  if the returned array is not empty concatanates the name to the persons array
    if (newName.length === 0) {
      alert('Please enter name');
    } else if (doesContactExist.length !== 0) {
      window.confirm(`${newName} is already in the phonebook`);
    } else {
      numberService.create(nameObj).then(returnedName => {
        setPersons(persons.concat(returnedName));
      });
    }
  };

  const deleteContact = id => {
    const deleted = persons.filter(contact => contact.id !== id);
    const contactToRemove = persons.find(n => n.id === id);
    if (
      window.confirm(`Are you sure you want to delete ${contactToRemove.name} ?`)
    ) {
      numberService.remove(id).then(setPersons(deleted));
    }
  };

  const resetForm = () => {
    return setNewName('');
  };

  //function to handle the onchange value of input name
  const handleNameChange = event => {
    setNewName(event.target.value);
  };
  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        resetForm={resetForm}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addName={addName}
      />
      <h2>Numbers</h2>
      <PersonList
        persons={persons}
        filteredName={filteredName}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
