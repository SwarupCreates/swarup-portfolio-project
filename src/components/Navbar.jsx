import React from 'react';
import './Navbar.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Repository' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <nav className="navbar" aria-label="Main Navigation">
        <div className="navbar-brand" onClick={() => scrollToSection('hero')}>
          <span>Swarup</span>Ranjan Paul
        </div>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
