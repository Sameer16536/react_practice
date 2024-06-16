import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

// Lazy loading components
const Landing = React.lazy(() => import('./components/Landing'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: 'blue' }}>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </div>
  );
};

export default App;
