import React from 'react';

const PersonList = props => {
  const filter = props.persons
    .filter(a => {
      if (props.filteredName.length === 0) {
        return true;
      }
      return a.name.toLowerCase().startsWith(props.filteredName.toLowerCase());
    })
    .map(person => (
      <div key={person.id}>
        {person.name} {person.number}
        <button value={person.name} onClick={() => props.deleteContact(person.id,person.name)}>delete</button>
      </div>
    ));
  return <div>{filter}</div>;
};

export default PersonList;
