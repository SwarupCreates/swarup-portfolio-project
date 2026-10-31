import React from 'react';

export default function PageB() {
  return (
    <div className="page-container">
      <h1 className="page-title">Page B</h1>
      <p className="page-description">
        Demonstration page prepared for 3D graphics (Three.js).
      </p>
      <div className="demo-card">
        <h3>Three.js Ready</h3>
        <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
          3D canvas elements can be easily embedded here.
        </p>
      </div>
    </div>
  );
}
