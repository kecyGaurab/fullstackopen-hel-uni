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
      <div key={person.id} className="contact">
        <span>
          {person.name} {person.number}
          <button
            className="delete-button"
            value={person.name}
            onClick={() => props.deleteContact(person.id, person.name)}>
            <label>delete</label>
          </button>
        </span>
      </div>
    ));
  return <div>{filter}</div>;
};

export default PersonList;
