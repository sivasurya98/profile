import "./App.css";
import Home from "./Pages/Home";
import Portfolios from "./Pages/Portfolios";
import Testimonials from "./Pages/Testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolios />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
