import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import mapImage from "../../assets/path-to-your-map-image.jpg";

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

              <motion.div
                className="privacy-policy"
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <input
                  type="checkbox"
                  name="acceptPolicy"
                  id="privacy-policy"
                  checked={formData.acceptPolicy}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="privacy-policy">
                  I accept your <span className="policy-link">Privacy Policy</span>
                </label>
              </motion.div>

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

          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {["facebook", "twitter", "instagram", "behance", "dribbble"].map((platform, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className={`fab fa-${platform}`}></i>
              </motion.a>
            ))}
          </motion.div>

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