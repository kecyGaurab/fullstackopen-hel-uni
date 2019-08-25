import React from "react";

const PersonForm = props => {
  return (
    <div>
    
      <form onSubmit={props.addName} onReset={props.resetForm}>
        <div>
          <div>
            
             Name <input 
              value={props.newName} 
              onChange={props.handleNameChange} />
          </div>
          <div>
            Number <input
              value={props.newNumber}
              onChange={props.handleNumberChange}
            />
          </div>
        </div>

        <div>
         <button type="submit">add</button>
          <button type="reset">clear</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
