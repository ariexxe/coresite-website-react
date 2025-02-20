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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle window resize to reset menu state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close menu if resizing to desktop mode
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

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {["/", "/About", "/Services", "/Blog", "/Contact"].map((path, index) => (
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

        {/* Custom Checkbox-Based Hamburger */}
        <input id="checkbox2" type="checkbox" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
        <label className="toggle toggle2" htmlFor="checkbox2">
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
