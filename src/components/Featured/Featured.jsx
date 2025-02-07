import React from 'react';
import { motion } from 'framer-motion';
import './Featured.css';
import Logo1 from '../../assets/Logo 1.png';
import Logo2 from '../../assets/Logo 2.png';
import Logo3 from '../../assets/Logo 3.png';
import Logo4 from '../../assets/Logo 4.png';
import Logo5 from '../../assets/Logo 5.png';
import Logo6 from '../../assets/Logo 6.png';
import Logo7 from '../../assets/Logo 7.png';

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Delay between each logo animation (Domino effect)
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured on
        </motion.h3>

        <motion.div
          className="featured-logos"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="featured-logo"
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
