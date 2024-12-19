// src/components/ui/button.jsx
import React from 'react';

export const Button = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: 'white',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);
