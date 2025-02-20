import { useState } from "react";
import { motion } from "framer-motion";
import "./Contacts.css";
import mapImage from "../../assets/path-to-your-map-image.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faInstagram, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    inquiryType: "",
    projectDetails: "",
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
      className="contact-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-container">
        {/* Contact Form */}
        <motion.div
          className="form-container"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="form-title">Let's Talk</h2>
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            <div className="form-fields">
              {["name", "phone", "email"].map((field, index) => (
                <motion.input
                  key={index}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                />
              ))}

              <motion.select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                required
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <option value="">Inquiry Type</option>
                <option value="general">General Inquiry</option>
                <option value="project">Project Inquiry</option>
                <option value="support">Support</option>
              </motion.select>

              <motion.textarea
                name="projectDetails"
                placeholder="Tell us something about your project"
                value={formData.projectDetails}
                onChange={handleChange}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              />

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

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </div>
          </motion.form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="info-container"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="map-section">
            <a 
              href="https://www.google.com/maps/place/Quezon+City,+Metro+Manila,+Philippines" 
              target="_blank" 
              rel="noopener noreferrer"
              className="map-link"
            >
              <img src={mapImage} alt="Location Map" className="map-image" />
              <div className="map-hover-effect">Click to View Location</div>
            </a>
            <div className="address">
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
                  Aurora, 2821 S Parker Rd#163, CO 80014
                </a>
              </p>
            </div>
          </div>

          <ul className="example-2">
  <li className="icon-content">
    <a href="https://github.com/ariexxe" aria-label="GitHub" data-social="github">
      <div className="filled"></div>
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <div className="tooltip">GitHub</div>
  </li>

  <li className="icon-content">
    <a href="https://www.facebook.com/princess.manatiga" aria-label="Facebook" data-social="facebook">
      <div className="filled"></div>
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <div className="tooltip">Facebook</div>
  </li>

  <li className="icon-content">
    <a href="https://x.com/arie_xxe" aria-label="X (Twitter)" data-social="twitter">
      <div className="filled"></div>
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <div className="tooltip">X</div>
  </li>

  <li className="icon-content">
    <a href="https://www.instagram.com/arie_xxe/" aria-label="Instagram" data-social="instagram">
      <div className="filled"></div>
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <div className="tooltip">Instagram</div>
  </li>

  <li className="icon-content">
    <a href="https://www.behance.net/arielleperez" aria-label="Behance" data-social="behance">
      <div className="filled"></div>
      <FontAwesomeIcon icon={faBehance} size="2x" />
    </a>
    <div className="tooltip">Behance</div>
  </li>

  <li className="icon-content">
    <a href="https://dribbble.com/ariexxe" aria-label="Dribble" data-social="dribble">
      <div className="filled"></div>
      <FontAwesomeIcon icon={faDribbble} size="2x" />
    </a>
    <div className="tooltip">Dribble</div>
  </li>
</ul>


          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Project Inquiries</h3>
            <p className="email">hello@coresite.com</p>
            <p className="phone">(63+) 987-654-3210</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;