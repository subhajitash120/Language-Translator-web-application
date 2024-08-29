import React from 'react';

const TextArea = ({ placeholder, value, onChange, readOnly = false }) => {
  return (
    <textarea
      className="textarea"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    ></textarea>
  );
};

export default TextArea;
