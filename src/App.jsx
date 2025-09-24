import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Aboutuspage from './pages/Aboutuspage';
import Servicepage from './pages/Servicepage';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<Aboutuspage />} />
        <Route path="/services" element={<Servicepage />} />
      </Routes>
    </div>
  );
}

export default App;
