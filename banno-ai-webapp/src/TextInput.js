// TextInput.js
import React from 'react';

const TextInput = ({ onTextChange }) => {
  const handleTextChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
  <div>
    <textarea onChange={handleTextChange}
     placeholder="Enter text..."
     rows = {5}
     cols= {100}
    //  style = {{resize:}}
    />
  </div> 
  );
};

export default TextInput;
