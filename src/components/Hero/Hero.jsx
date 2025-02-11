import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroImage from '../../assets/Hero-image.png';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Simplifying Digital Experiences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Delivering essential solutions for your success—nothing less, nothing more
          </motion.p>
          <div className="cta-buttons">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/services" className="btn primary">Explore Services</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" className="btn secondary">Contact Us</Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
  className="hero-image"
  initial={{ opacity: 5, scale: 1 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -10, 0], // Moves image up and down
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatType: "mirror", // Makes it move up and down smoothly
    ease: "easeInOut",
  }}
>
  <img src={HeroImage} alt="Digital Experience" />
</motion.div>

      </div>       
    </section>
  );
};

export default Hero;
