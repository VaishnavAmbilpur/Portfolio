import React, { useState, useEffect } from 'react';
import Loader from './Componets/Loader';
import SmoothFollower from './Componets/Fluid';
import Hero from './Componets/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import AnimatedBackground from './Componets/Background1';
function CodeforcesRedirect() {
  useEffect(() => {
    window.open("https://codeforces.com/profile/DexterMorgan11", "_blank", "noopener,noreferrer");
    window.location.replace("/");
  }, []);
  return <div>Redirecting to Codeforces...</div>;
}

function MainContent({ showLoader,children}) {
  return (
    <div className="relative">
      {showLoader ? (
        <div className="flex justify-center h-screen w-screen items-center bg-zinc-950">
          <Loader />
        </div>
      ) : (
        <main className="relative overflow-x-hidden min-h-screen w-full bg-zinc-950">
          <AnimatedBackground />
      
       <div className="relative overflow-x-hidden z-10">
            {children} {/* Each page handles its own background */}
          </div>

          <SmoothFollower />
        </main>
      )}
    </div>
  );
}

function MyComponent() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent showLoader={showLoader}><Hero /></MainContent>} />
        <Route path="/codeforces" element={<CodeforcesRedirect />} />
        <Route path="/TechStack" element={<MainContent showLoader={showLoader}><Skills /></MainContent>} />
        <Route path="/Projects" element={<MainContent showLoader={showLoader}><Projects /></MainContent>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyComponent;