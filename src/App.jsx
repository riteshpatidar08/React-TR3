import Homepage from './pages/Homepage';
import { Routes, Route } from 'react-router-dom';
import Aboutuspage from './pages/Aboutuspage';
import Servicepage from './pages/Servicepage';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Productpage from './pages/Productpage';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<Aboutuspage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Productpage/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}
      </Routes>
    </div>
  );
}

export default App;
