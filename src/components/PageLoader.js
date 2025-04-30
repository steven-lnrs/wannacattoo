// 📍 src/components/PageLoader.jsx
import React from 'react';
import '../styles/theme.css';

export default function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-spinner"></div>
      <p>Loading your cat experience...</p>
    </div>
  );
}
