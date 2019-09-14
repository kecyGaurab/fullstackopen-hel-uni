import React from 'react';

const Filter = props => {
  return (
    <div className="filter">
      Filter shown with
      <input value={props.filteredName} onChange={props.handleFilter} />
    </div>
  );
};

export default Filter;
