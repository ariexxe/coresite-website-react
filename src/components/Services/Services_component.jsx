import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Services_component.css';
import webDev from '../../assets/web-development.png';
import consulting from '../../assets/consulting.png';
import marketing from '../../assets/digital-marketing.png';

const services = [
  {
    id: 1,
    title: 'Web Design & Development',
    description: 'Clean, functional websites for businesses or individuals.',
    image: webDev,
    alt: 'Web Development',
  },
  {
    id: 2,
    title: 'Consulting Services',
    description: 'Personalized advice to enhance your digital presence.',
    image: consulting,
    alt: 'Consulting Services',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'SEO, content strategy, and campaigns.',
    image: marketing,
    alt: 'Digital Marketing',
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

const ServicesSection = () => {
  return (
    <section className="services">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Focused solutions tailored to meet your core needs.
        </motion.p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.alt} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Need a custom solution? Reach out to us for tailored services.</p>
          {/* Link to the Services page */}
          <Link to="/services">
            <motion.button
              className="learn-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
