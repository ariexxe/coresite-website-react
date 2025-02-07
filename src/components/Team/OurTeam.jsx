import React, { useState } from 'react';
import './OurTeam.css';
import { motion } from 'framer-motion';
import johnRamos from '../../assets/path-to-john-image.jpg';
import carlosMendoza from '../../assets/path-to-carlos-image.jpg';
import sofiaRivera from '../../assets/path-to-sofia-image.jpg';
import emmaClark from '../../assets/path-to-emma-image.jpg';
import davidLee from '../../assets/path-to-david-image.jpg';
import sarahJohnson from '../../assets/path-to-sarah-image.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'John Ramos',
    role: 'Founder & CEO',
    description: 'Leads CoreSite with a vision to simplify and enhance digital solutions.',
    image: johnRamos,
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    role: 'Lead Developer',
    description: 'Ensures the technical backbone of projects remains innovative and clean.',
    image: carlosMendoza,
  },
  {
    id: 3,
    name: 'Sofia Rivera',
    role: 'Creative Director',
    description: 'Brings minimalist and impactful designs to life for clients.',
    image: sofiaRivera,
  },
  {
    id: 4,
    name: 'Emma Clark',
    role: 'Content Strategist',
    description: 'Creates compelling messages that align with the brand values.',
    image: emmaClark,
  },
  {
    id: 5,
    name: 'David Lee',
    role: 'UX Designer',
    description: 'Crafts intuitive and user-friendly digital experiences.',
    image: davidLee,
  },
  {
    id: 6,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    description: 'Develops strategic initiatives to grow our digital presence.',
    image: sarahJohnson,
  }
];

const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayedMembers = teamMembers.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % teamMembers.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 3;
      return newIndex < 0 ? teamMembers.length - 3 : newIndex;
    });
  };

  return (
    <motion.div 
      className="our-team"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }} // Ensures it animates only once when scrolling
    >
      <h2 className="team-title">Our Team</h2>
      <div className="team-container">
        {displayedMembers.map((member) => (
          <motion.div
            key={member.id}
            className="team-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }} // Zoom-in effect on hover
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="navigation-buttons">
        <motion.button
          className="nav-btn prev"
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }} // Scale-up effect on hover
          transition={{ duration: 0.3 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
        <motion.button
          className="nav-btn next"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }} // Scale-up effect on hover
          transition={{ duration: 0.3 }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default OurTeam;
