import React from 'react';

const TranslateButton = ({ onClick }) => {
  return (
    <button className="translate-button" onClick={onClick}>
      Translate
    </button>
  );
};

export default TranslateButton;
