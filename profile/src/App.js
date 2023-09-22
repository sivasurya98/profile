import './App.css';
import Home from './Pages/Home';
import Portfolios from './Pages/Portfolios';
import Testimonials from './Pages/Testimonials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/portfolios" element={<Portfolios/>} />
        <Route path="/Testimonials" element={<Testimonials/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
