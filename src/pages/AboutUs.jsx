import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import { FaUsers, FaBullseye, FaAward } from "react-icons/fa";
import TeamCollaboration from "../assets/images-team1.png";
import WorkingTogether from "../assets/images-team2.png";
import DesignProcess from "../assets/images-team3.png";
import CreativeMeeting from "../assets/images-team4.png";
import Founder from "../assets/Founder.png";
import Bg from "../assets/bg-about-image.jpg";
import OurTeam from '../components/Team/OurTeam';

// Scroll animations
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <div className="about-us">
      <motion.h1 initial="hidden" whileInView="visible" variants={fadeInUp}>
        About Us
      </motion.h1>

      <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp}>
        Empowering Businesses With Minimalist Solutions
      </motion.h2>

      <motion.p initial="hidden" whileInView="visible" variants={fadeInUp}>
        At CoreSite, we focus on simplifying digital experiences through
        functional, clean, and beautiful designs. We believe that less is more,
        and simplicity can drive impact.
      </motion.p>

      <motion.div
  className="image-gallery"
  initial="hidden"
  whileInView="visible"
  variants={fadeInUp}
>
  {[TeamCollaboration, WorkingTogether, DesignProcess, CreativeMeeting].map(
    (image, index) => (
      <motion.img
        key={index}
        src={image}
        alt={`Gallery Image ${index + 1}`}
        className="gallery-image"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.2, // Domino effect delay
          },
        }}
        animate={{
          y: [0, -10, 0], // Continuous up and down motion
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1 }} // Hover effect (zoom in slightly)
      />
    )
  )}
</motion.div>


      <motion.h3
        className="impact-title"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        We Ensure Your Ideas Are Turned Into Impactful Realities
      </motion.h3>

      <div className="eme-container">
        <motion.div
          className="eme"
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeft}
        >
          <p>
            Our team works closely with you to bring your vision to life.
            Whether you’re starting from scratch or reimagining your brand, our
            team of developers, designers, and strategists collaborate
            seamlessly to deliver results that matter.
          </p>
        </motion.div>

        <motion.div
          className="eme"
          initial="hidden"
          whileInView="visible"
          variants={fadeInRight}
        >
          <p>
            We help businesses and individuals grow with minimalist web design,
            branding, and strategies that focus on the essentials. From concept
            to creation, our solutions are tailored to make your digital
            presence stand out.
          </p>
        </motion.div>
      </div>

      <OurTeam />
      
      <motion.div
        className="testimonial-section"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <div className="testimonial-image">
          <img src={Founder} alt="Founder" />
          <div className="quote">
            <p>“Building impactful, minimalist solutions together”</p>
            <p>Founder</p>
          </div>
        </div>
        <div className="testimonial-content">
          <h3>We Empower Businesses To Grow Faster And Smarter</h3>
          <blockquote>
            “Working with CoreSite made our branding stronger and website
            simpler to navigate, which led to a 30% increase in engagement!”
          </blockquote>
          <p>— Happy Client</p>
        </div>
      </motion.div>

      <motion.div
        className="skills-section"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <h2>Our Skills</h2>
        <p>
          At CoreSite, we focus on delivering solutions that empower businesses
          to achieve growth through simplicity, functionality, and focus.
        </p>
        <div className="skills-grid">
          {["5+", "200+", "10+", "150+"].map((number, index) => (
            <motion.div
              className="skill-card"
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
            >
              <div className="card-glow"></div>
              <h3 className="card-number">{number}</h3>
              <p className="card-text">
                {index === 0
                  ? "Years of Experience"
                  : index === 1
                  ? "Projects Completed"
                  : index === 2
                  ? "Awards Won"
                  : "Happy Clients"}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <section className="about-section">
        <motion.div
          className="content"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2>We Help Businesses Grow Faster And Bigger</h2>
          <p>
            At CoreSite, we focus on delivering solutions that empower
            businesses to achieve growth through simplicity, functionality, and
            focus.
          </p>
          <div className="features">
            {[FaUsers, FaBullseye, FaAward].map((Icon, index) => (
              <motion.div
                className="feature"
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
              >
                <div className="icon-wrapper">
                  <Icon className="icon" />
                </div>
                <h3>
                  {index === 0
                    ? "Professional Team"
                    : index === 1
                    ? "Target Oriented"
                    : "Success Guarantee"}
                </h3>
                <p>
                  {index === 0
                    ? "Our team ensures your vision is understood and executed."
                    : index === 1
                    ? "We prioritize your goals and build solutions that deliver measurable impact."
                    : "We ensure quality, results, and client satisfaction."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="background-circles">
          <span className="circle circle-1"></span>
          <span className="circle circle-2"></span>
          <span className="circle circle-3"></span>
          <span className="circle circle-4"></span>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;