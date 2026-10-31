import React, { useState } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'pageA', label: 'Page A' },
  { id: 'pageB', label: 'Page B' },
  { id: 'pageC', label: 'Page C' },
];

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar" aria-label="Main Navigation">
        <div className="navbar-brand" onClick={() => handleNavClick('home')}>
          <span>Swarup</span>Portfolio
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-links desktop-only">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <ul className="navbar-links mobile-menu mobile-only">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
