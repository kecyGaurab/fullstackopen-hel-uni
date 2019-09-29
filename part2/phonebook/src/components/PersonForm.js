import React from 'react';
import './PersonForm.css'

const PersonForm = props => {
  return (
    <div>
      <form className="form" onSubmit={props.handleSubmit} onReset={props.resetForm}>
        <div>
          <div>
            <input
              className="inputField"
              placeholder = "Name"
              value={props.newName}
              onChange={props.handleNameChange}
            />
          </div>
          <div>
            <input
              className="inputField"
              value={props.newNumber}
              placeholder = "Number"
              onChange={props.handleNumberChange}
            />
          </div>
        </div>

        <div className = "submit-button">
          <button  type="submit">
            add
          </button>
          <button type="reset">
            clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
