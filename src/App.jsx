import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <div style={{ padding: '20px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setCurrentPage('Home')}>Home</button>
        <button onClick={() => setCurrentPage('Page A')}>Page A</button>
        <button onClick={() => setCurrentPage('Page B')}>Page B</button>
        <button onClick={() => setCurrentPage('Page C')}>Page C</button>
      </nav>
      <main>
        <h1>Hello World: {currentPage}</h1>
      </main>
    </div>
  )
}

export default App
