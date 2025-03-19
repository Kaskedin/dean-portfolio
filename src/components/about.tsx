// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl text-white font-semibold mb-4">About Me</h2>
      <div className="space-y-2 text-white">
        <p>🧠 Studied Software Development at CTU Training Solutions</p>
        <p>📱 Frontend experience in React & Flutter</p>
        <p>🏚️ Backend experience in PHP and MySQL</p>
      </div>
    </section>
  );
}

export default About;