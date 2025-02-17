import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactHero from "../../src/assets/contact-us-image.png"; 
import supportImage from "../../src/assets/support-agent.png";
import emailImage from "../../src/assets/email-support.png";
import locationImage from "../../src/assets/city-view.png";
import mapImage from "../../src/assets/map-image.png";
import FAQ from '../components/FAQ/FAQ';


const contactData = [
  {
    id: 1,
    title: "Call us for Customer Support",
    detail: "(63+) 987-654-3210",
    icon: <FaPhoneAlt />,
    bgImage: supportImage ,
  },
  {
    id: 2,
    title: "Email us for Inquiries",
    detail: "hello@coresite.com",
    icon: <FaEnvelope />,
    bgImage: emailImage,
    isEmail: true,
  },
  {
    id: 3,
    title: "Quezon City, Philippines",
    detail: "Aurora, 2821 S Parker Rd #163, CO 80014",
    icon: <FaMapMarkerAlt />,
    bgImage: locationImage,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    message: "",
    acceptPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.section
      className="ContactSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="ContactTitle">Contact Us</h2>
      <p className="ContactSubtitle">
        Empowering Your Business With Tailored Solutions Designed To Achieve Results.
      </p>
      
      <div className="ContactContainer">
        {/* Contact Form */}
        <motion.form 
          className="ContactForm" 
          onSubmit={handleSubmit}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="Input-Title">Send Us a Message</h3>
          <div className="InputGroup">
            <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="InputGroup">
            <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
            <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} required>
              <option value="">Inquiry Type *</option>
              <option value="general">General Inquiry</option>
              <option value="project">Project Inquiry</option>
              <option value="support">Support</option>
            </select>
          </div>

          <textarea name="message" placeholder="Tell us something about your project" value={formData.message} onChange={handleChange} required />

          <div className="PrivacyPolicy">
            <label className="CustomCheckbox">
              <input
                type="checkbox"
                name="acceptPolicy"
                checked={formData.acceptPolicy}
                onChange={handleChange}
                required
              />
              <svg viewBox="0 0 64 64" height="1.3em" width="1.5em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="CheckboxPath"
                ></path>
              </svg>
            </label>
            <label className="PolicyText">
              I accept your <span className="PolicyLink">Privacy Policy</span>
            </label>
          </div>

          <motion.button type="submit" className="SendButton" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send
          </motion.button>
        </motion.form>

        {/* 📷 Contact Image */}
        <motion.div
  className="ContactImageContainer"
  initial={{ opacity: 1, scale: 1 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -10, 0], 
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
>
          <img src={ContactHero} alt="Contact Us" className="ContactImage" />
        </motion.div>
      </div>

      {/* Contact Cards */}
      <section className="ContactCards">
      {contactData.map((card) => (
        <motion.div
          key={card.id}
          className="ContactCard"
          style={{ backgroundImage: `url(${card.bgImage})` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: card.id * 0.2 }}
          whileHover={{ scale: 1.03 }}
        >
          <div className="CardOverlay"></div>
          <div className="CardContent">
            <span className="CardIcon">{card.icon}</span>
            <h3 className="CardTitle">{card.title}</h3>
            {card.isEmail ? (
              <a href={`mailto:${card.detail}`} className="CardDetail EmailLink">
                {card.detail}
              </a>
            ) : (
              <p className="CardDetail">{card.detail}</p>
            )}
          </div>
        </motion.div>
      ))}
    </section>
    <div className="MapContainer">
    <h3 className="MapTitle">Visit Us Here</h3>
      <div className="MapSection">
        <a 
          href="https://www.google.com/maps/place/Quezon+City,+Metro+Manila,+Philippines" 
          target="_blank" 
          rel="noopener noreferrer"
          className="MapLink"
        >
          <img src={mapImage} alt="Location Map" className="MapImage" />
          <div className="MapHoverEffect">Click to View Location</div>
        </a>
      </div>
      
      <div className="Address">
        <p>
          <a
            href="https://www.google.com/maps/place/Quezon+City,+Metro+Manila,+Philippines"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quezon City, Philippines
          </a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps/place/2821+S+Parker+Rd+%23163,+Aurora,+CO+80014"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aurora, 2821 S Parker Rd #163, CO 80014
          </a>
        </p>
      </div>
    </div>
    <FAQ/>
    </motion.section>

    
  );
};

export default Contact;
