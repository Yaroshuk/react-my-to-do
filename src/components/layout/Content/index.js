import React from 'react';
import './style.css';

const Content = ({ title, children }) => {
  return (
    <div className="content">
      <div className="content-title">
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
};

export default Content;