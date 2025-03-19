// src/components/Socials.tsx
import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  bgColor: string;
}

const Socials: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { name: 'Facebook', url: 'https://facebook.com/Dean Hauptfleisch', bgColor: 'bg-blue-600' },
    { name: 'Instagram', url: 'https://instagram.com/xdean_hauptfleischx', bgColor: 'bg-pink-600' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/Dean Hauptfleisch', bgColor: 'bg-blue-700' },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl text-white font-semibold mb-4">🌐 Socials</h2>
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <a 
            key={social.name}
            href={social.url} 
            className={`${social.bgColor} text-white px-3 py-1 rounded`}
          >
            {social.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Socials;