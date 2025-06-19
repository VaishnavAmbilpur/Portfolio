import React from 'react';
import './Loader.css'; // We'll create this CSS file

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-container">
        <div className="loader-circle circle-1" />
        <div className="loader-circle circle-2" />
        <div className="loader-circle circle-3" />
        <div className="loader-shadow shadow-1" />
        <div className="loader-shadow shadow-2" />
        <div className="loader-shadow shadow-3" />
      </div>
    </div>
  );
}

export default Loader;