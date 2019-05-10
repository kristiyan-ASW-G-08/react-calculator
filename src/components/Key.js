import React, { useState } from 'react';
const Key = ({ keyItem, currentInputHandler, id }) => {
  return (
    <button
      id={id}
      onClick={() => currentInputHandler(keyItem.value)}
      className="Key"
    >
      {keyItem.value}
    </button>
  );
};

export default Key;
