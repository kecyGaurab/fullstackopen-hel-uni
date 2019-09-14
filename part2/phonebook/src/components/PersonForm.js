import React from 'react';

const PersonForm = props => {
  return (
    <div>
      <form className="form" onSubmit={props.addName} onReset={props.resetForm}>
        <div>
          <div>
            <label>Name</label>
            <input
              className="input"
              value={props.newName}
              onChange={props.handleNameChange}
            />
          </div>
          <div>
            <label>Number</label>
            <input
              className="input"
              value={props.newNumber}
              onChange={props.handleNumberChange}
            />
          </div>
        </div>

        <div>
          <button class="add" type="submit">
            add
          </button>
          <button class="clear" type="reset">
            clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
