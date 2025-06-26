import React from 'react';
import './AnimatedBackground1.css'; // We'll extract the CSS into a separate file

const AnimatedBackground = () => {
  return (
    <div className="background">
      {[...Array(1000)].map((_, i) => (
        <span key={i} className={`particle particle-${i}`} />
      ))}
    </div>
  );
};

export default AnimatedBackground;