import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <footer className="bg-white border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} LuxPortfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
