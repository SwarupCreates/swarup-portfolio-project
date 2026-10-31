import React from 'react';

export default function Home() {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome Home</h1>
      <p className="page-description">
        This is a responsive, modern React application setup with Framer Motion, 3D.js (Three.js), and Anime.js.
      </p>
      <div className="demo-card">
        <h3>Overview</h3>
        <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
          Navigate using the header menu above to check out Page A, Page B, and Page C.
        </p>
      </div>
    </div>
  );
}
