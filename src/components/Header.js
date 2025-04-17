// src/components/Header.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <h1>WannaCatToo 🐾</h1>
      <button onClick={toggleTheme}>
  {darkMode ? '☀️ Switch to Light' : '🌙 Switch to Dark'}
  </button>
  </header>
  );
}

export default Header;