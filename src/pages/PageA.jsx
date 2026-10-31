import React from 'react';
import { motion } from 'framer-motion';

export default function PageA() {
  return (
    <div className="page-container">
      <h1 className="page-title">Page A</h1>
      <p className="page-description">
        Demonstration page using Framer Motion animation setup.
      </p>
      <motion.div
        className="demo-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3>Framer Motion Ready</h3>
        <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
          This card animated seamlessly on mount.
        </p>
      </motion.div>
    </div>
  );
}
