// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1>Welcome to WannaCatToo 🐱</h1>
      <p>The only place to rent or keep the purrrfect companion.</p>

      <Link to="/store">
        <button
          style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            fontSize: '1.25rem',
            borderRadius: '30px',
            backgroundColor: '#ffcc66',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
          }}
        >
          🛒 Enter the Cat Store
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
