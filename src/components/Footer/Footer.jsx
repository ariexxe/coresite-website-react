import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Footer.css";
import CoresiteLogo from "../../assets/Logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faInstagram, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';


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
            className="contact-info-footer"
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
