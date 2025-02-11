import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
