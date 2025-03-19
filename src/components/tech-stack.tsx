// src/components/TechStack.tsx
import React from 'react';

interface Tech {
  name: string;
  color: string;
}

const TechStack: React.FC = () => {
  const techs: Tech[] = [
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Python', color: 'bg-blue-500' },
    { name: 'PHP', color: 'bg-indigo-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'Firebase', color: 'bg-orange-500' },
    { name: 'Vercel', color: 'bg-black' },
    { name: 'Azure', color: 'bg-blue-700' },
    { name: 'Flutter', color: 'bg-blue-400' },
    { name: 'Laravel', color: 'bg-red-500' },
    { name: 'Node-RED', color: 'bg-red-600' },
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'React Native', color: 'bg-cyan-600' },
    { name: 'TailwindCSS', color: 'bg-teal-500' },
    { name: 'Figma', color: 'bg-orange-600' },
    { name: 'GitHub', color: 'bg-gray-700' },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl text-white font-semibold mb-4">💻 Tech Stack</h2>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span 
            key={tech.name}
            className={`${tech.color} text-white px-3 py-1 rounded-full text-sm`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TechStack;