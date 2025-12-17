import React from 'react';
import './AnimatedBackground1.css';

const AnimatedBackground = () => {
  return (
    <div className="background">
      {[...Array(3000)].map((_, i) => (
        <span key={i} className={`particle particle-${i}`} />
      ))}
    </div>
  );
};

export default AnimatedBackground;