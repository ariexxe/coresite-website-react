import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import developerWorking from '../../assets/developer-working.jpg';
import bgImage from '../../assets/bg-about-image.jpg'; // Import the background image

const About = () => {
  const aboutStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <motion.div
      className="about"
      style={aboutStyle}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} // Animation triggers only once when scrolling into view
    >
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h1>About Us</h1>
            <div className="about-statements">
              <p>CoreSite believes that less is more. By stripping away the unnecessary.</p>
              <p>We help clients focus on what truly matters for their success.</p>
              <p>To empower businesses and individuals by providing them with core digital solutions that make an impact—without the noise or complexity.</p>
            </div>
            <motion.button
              className="learn-more-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src={developerWorking} alt="Developer working" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
