import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from '../components/Dashboard';
import Landing from '../components/Landing';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from '../components/Contact';

function App() {
  return (
    // Client-side Routing
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
