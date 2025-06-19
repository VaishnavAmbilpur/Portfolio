import React, { useState, useEffect } from 'react';
import Loader from './Componets/Loader';
import AnimatedBackground from './Componets/Background';
import SmoothFollower from './Componets/Fluid';
import Hero from './Componets/Hero';

function MyComponent() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {showLoader ? (
        <div className="flex justify-center h-screen w-screen items-center bg-zinc-900">
          <Loader/>
        </div>
      ) : (
        <main className="relative overflow-x-hidden min-h-screen w-full bg-zinc-900">
          <AnimatedBackground /> {/* Background with negative z-index */}
          <div className="relative overflow-x-hidden z-10"> {/* Content wrapper with positive z-index */}
            <Hero />
          </div>
          <SmoothFollower /> {/* Cursor effect should be on top */}
        </main>
      )}
    </div>
  );
}
export default MyComponent;