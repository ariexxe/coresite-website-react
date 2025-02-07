import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import CoresiteLogo from "../../assets/Logo.svg";

const linkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle window resize to reset menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);  // Close menu if resizing to desktop mode
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={CoresiteLogo} alt="CoreSite Logo" />
        </Link>

        {/* Apply visibility via CSS and use motion only for links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {["/", "/about", "/services", "/blog", "/contact"].map((path, index) => (
            <motion.div
              key={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to={path} className={location.pathname === path ? "active" : ""}>
                {path === "/" ? "Home" : path.substring(1).replace("-", " ")}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <motion.span 
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 5 : 0 }} 
            transition={{ duration: 0.3 }} 
          />
          <motion.span 
            animate={{ opacity: isOpen ? 0 : 1 }} 
            transition={{ duration: 0.3 }} 
          />
          <motion.span 
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -5 : 0 }} 
            transition={{ duration: 0.3 }} 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
