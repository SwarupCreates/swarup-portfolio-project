import React from 'react';

export default function PageC() {
  return (
    <div className="page-container">
      <h1 className="page-title">Page C</h1>
      <p className="page-description">
        Demonstration page prepared for Anime.js integration.
      </p>
      <div className="demo-card">
        <h3>Anime.js Ready</h3>
        <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
          Timeline and complex SVG animations can be driven here.
        </p>
      </div>
    </div>
  );
}
