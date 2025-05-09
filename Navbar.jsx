import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-50 text-white flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">Sium</h1>
      <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <button className="text-xl">☰</button>
      </div>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex space-x-6 text-lg md:items-center md:space-x-8 md:block`}
      >
        <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:underline">About</li>
        <li onClick={() => scrollToSection('projects')} className="cursor-pointer hover:underline">Projects</li>
        <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:underline">Contact</li>
      </ul>
    </nav>
  );
}