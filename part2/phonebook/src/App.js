import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';
import numberService from './components/numbers';

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
    if (newName.length === 0 || newNumber.length === 0) {
      alert('Please complete the fields');
    } else if (doesContactExist.length !== 0) {
      const contactToUpdate = persons.find(n => n.name === nameObj.name);
      const newObj = {...contactToUpdate, number: newNumber};

      if (window.confirm(` ${newObj.name} is already in the phonebook, replace the old number with the new one?`))
        numberService.update(newObj.id, newObj).then(response => {
          setPersons(
            persons.map(contact =>
              contact.id !== newObj.id ? contact : response
            )
          );
        });
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
      window.confirm(
        `Are you sure you want to delete ${contactToRemove.name} ?`
      )
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
