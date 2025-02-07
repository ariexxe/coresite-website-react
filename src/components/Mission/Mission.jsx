import React from 'react';
import { motion } from 'framer-motion';
import './Mission.css';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Mission
        </motion.h2>

        <motion.p
          className="mission-statement"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          To deliver streamlined, reliable, and essential digital solutions 
          that cater to individuals and businesses looking for simplicity and efficiency.
        </motion.p>
        
        <div className="mission-cards">
          {["SIMPLICITY", "RELIABILITY", "FOCUS"].map((title, index) => (
            <motion.div
              key={index}
              className="card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="icon-circle">
                <i className={`fas ${index === 0 ? "fa-hand-pointer" : index === 1 ? "fa-thumbs-up" : "fa-brain"}`}></i>
              </div>
              <h3>{title}</h3>
              <p>
                {title === "SIMPLICITY"
                  ? "Streamlined solutions for everyone."
                  : title === "RELIABILITY"
                  ? "Services you can trust."
                  : "Prioritizing what matters most."}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="testimonial"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          "CoreSite helped us refine our digital presence with minimal effort but maximum results."
        </motion.p>
      </div>
    </section>
  );
};

export default Mission;
