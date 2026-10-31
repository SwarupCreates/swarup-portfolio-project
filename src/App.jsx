import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import Home from './pages/Home';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'pageA':
        return <PageA />;
      case 'pageB':
        return <PageB />;
      case 'pageC':
        return <PageC />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
