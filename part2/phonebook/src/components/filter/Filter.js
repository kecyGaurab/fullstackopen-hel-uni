import React from 'react';
import './Filter.css'

const Filter = props => {
  return (
    <div className="search-field">
      <input placeholder= "Search Contact..." value={props.filteredName} onChange={props.handleFilter} />
    </div>
  );
};

export default Filter;
