import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";
import CoresiteLogo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/">
              <img src={CoresiteLogo} alt="CoreSite Logo" className="footer-logo" />
            </Link>
            <p>Quezon City, Philippines</p>
            <p>Aurora, 2021 S Parker Rd#1563, CO 80014</p>
          </motion.div>

          <motion.div
            className="footer-links"
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
            {[
              {
                title: "Services",
                links: [
                  { to: "/services", label: "Web Design" },
                  { to: "/services", label: "Web Development" },
                  { to: "/services", label: "Branding & Identity" },
                  { to: "/services", label: "Digital Marketing" },
                ],
              },
              {
                title: "Blog",
                links: [
                  { to: "/blog", label: "Processes And Tools" },
                  { to: "/blog", label: "Branding" },
                  { to: "/blog", label: "UX/UI" },
                  { to: "/blog", label: "Case Study" },
                ],
              },
              {
                title: "About the Business",
                links: [
                  { to: "/about", label: "Simplifying digital solutions" },
                  { to: "/contact", label: "Connect with Us" },
                ],
              },
            ].map((section, index) => (
              <motion.div
                className="footer-section"
                key={index}
                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              >
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.to}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
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
            <a href="tel:+639876543210">(+63) 987-654-3210</a>
            <a href="mailto:hello@coresite.com">hello@coresite.com</a>
          </motion.div>

          <motion.div
            className="legal-links"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/cookie">Cookie Policy</Link>
          </motion.div>

          <p className="copyright">© 2025 Coresite. All Rights Reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
