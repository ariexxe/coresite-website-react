import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Services.css";
import { Link, useLocation } from "react-router-dom";
import WebDev from "../../src/assets/web-development.png";
import Consulting from "../../src/assets/consulting.png";
import Marketing from "../../src/assets/digital-marketing.png";
import Uiux from "../../src/assets/ui-ux-design.png";
import Branding from "../../src/assets/branding-graphic-design.png";
import SocialMedia from "../../src/assets/social-media-content-marketing.png";
import bgImage from "../../src/assets/bg-about-image.jpg";
import profileImage1 from "../../src/assets/profile-image1.png";
import profileImage2 from "../../src/assets/profile-image2.png";
import profileImage3 from "../../src/assets/profile-image3.png";
import profileImage4 from "../../src/assets/profile-image4.png";
import Featured from '../components/Featured/Featured';


// Motion Variants
const fadeInUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

// Services Data
const services = [
  { id: 1, title: "Web Design & Development", description: "Clean, functional websites for businesses or individuals.", image: WebDev, alt: "Web Development" },
  { id: 2, title: "Consulting Services", description: "Personalized advice to enhance your digital presence.", image: Consulting, alt: "Consulting Services" },
  { id: 3, title: "Digital Marketing", description: "SEO, content strategy, and campaigns.", image: Marketing, alt: "Digital Marketing" },
  { id: 4, title: "UI/UX Design", description: "Sleek, user-friendly designs before development.", image: Uiux, alt: "Mobile & Web App UI/UX" },
  { id: 5, title: "Branding & Graphic Design", description: "Branding makes businesses stand out.", image: Branding, alt: "Social Media Graphics & Ads" },
  { id: 6, title: "Social Media & Content Marketing", description: "Clients need more than a website—they need engagement and conversions.", image: SocialMedia, alt: "Social Media Strategy & Management" },
];

// Testimonials Data
const testimonials = [
  { id: 1, name: "Maria Fernandez", position: "Founder, Bloom Marketing", text: "CoreSite transformed our online presence! Our sales increased by 40% in the first month!", image: profileImage1 },
  { id: 2, name: "Sophie Williams", position: "CEO, Tech Solutions", text: "Amazing work! The team understood our vision and created a website that perfectly represents our brand.", image: profileImage2 },
  { id: 3, name: "David Johnson", position: "Marketing Director, Creatix", text: "Their design and marketing strategies boosted our engagement by 60%. Highly recommended!", image: profileImage3 },
  { id: 4, name: "John Smith", position: "Co-Founder, Startup X", text: "CoreSite delivered an outstanding product. The UI/UX design is intuitive and stunning!", image: profileImage4 },
];


const Services = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Go to previous testimonial
  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Go to next testimonial
  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="Services">
      <div className="Container">
        {/* Title */}
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false, amount: 0.2 }}>
          Our Services
        </motion.h2>

        {/* Subtitle */}
        <motion.p className="Services-second-subtitle" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false, amount: 0.2 }}>
          Focused solutions tailored to meet your core needs.
        </motion.p>

        {/* Services Grid */}
        <div className="Services-grid">
          {services.map((service, index) => (
            <motion.div key={service.id} className="Service-card"
              initial="hidden" whileInView="visible"
              variants={(index % 4 === 0 || index % 4 === 1) ? fadeInLeft : fadeInRight}
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div className="Service-image" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: false }}>
                <img src={service.image} alt={service.alt} />
              </motion.div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
<section
  className="testimonial-section"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  }}
>
  <div className="testimonial-container">
    {/* Title */}
    <motion.h2 className="testimonial-title" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false, amount: 0.2 }}>
      What Our Clients Say
    </motion.h2>

    {/* Subtitle */}
    <motion.p className="testimonial-subtitle" initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: false, amount: 0.2 }}>
      Trusted by businesses worldwide, we deliver exceptional results.
    </motion.p>

    {/* Testimonial Content */}
    <motion.div className="testimonial-content" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
      {/* Left Side - Stats */}
      <motion.div className="testimonial-stats" variants={fadeInLeft}>
        <span className="testimonial-number">150<span className="plus"><i className="fas fa-plus"></i></span></span>
        <p className="testimonial-clients">Happy Clients</p>
      </motion.div>

      {/* Right Side - Testimonial Slider */}
      <div className="testimonial-slider">
        <AnimatePresence mode="wait">
          <motion.div 
            key={testimonials[index].id} 
            className="testimonial-card" 
            initial="hidden" 
            animate="visible" 
            exit="hidden" 
            variants={fadeInRight}
          >
            <motion.img src={testimonials[index].image} alt={testimonials[index].name} className="profile-image" />
            <h3 className="client-name">{testimonials[index].name}</h3>
            <p className="client-position">{testimonials[index].position}</p>
            <p className="testimonial-text">"{testimonials[index].text}"</p>

            {/* Star Ratings */}
            <motion.div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <motion.span key={i} className="star">★</motion.span>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="testimonial-buttons">
          <motion.button
            className="tes-btn prev"
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>

          <motion.button
            className="tes-btn next"
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>  {/* ✅ FIX: Closing the testimonial-content div properly */}
  </div>  {/* ✅ Closing testimonial-container */}
</section>

 {/* CTA Section */}
 <div className="cta-section">
        <h2>Ready to Elevate Your Brand?</h2>
        <p>Contact us today to get started on your digital transformation journey.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </div>

      <Featured />
    </section>
  );
};

export default Services;
