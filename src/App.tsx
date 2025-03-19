// src/App.tsx
import React from 'react';
import Header from './components/header';
import About from './components/about';
import TechStack from './components/tech-stack';
import Socials from './components/socials';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Socials />
        <TechStack />
      </main>
    </div>
  );
}

export default App;
