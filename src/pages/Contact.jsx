import { useState } from "react";
import { motion } from "framer-motion";
import Swal from 'sweetalert2'
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faInstagram, faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';
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
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const inquiryType = form.inquiryType.value;
    const message = form.message.value.trim();

    // Set hidden fields dynamically
    form.from_name.value = name;
    form.subject.value = `New ${inquiryType.charAt(0).toUpperCase() + inquiryType.slice(1)} Inquiry`;

    // 🔹 Validate Privacy Policy
    if (!isChecked) {
      Swal.fire({
        title: "Privacy Policy Required",
        text: "You must accept the Privacy Policy to proceed.",
        icon: "warning",
        confirmButtonColor: "#007BFF",
      });
      return;
    }

    // 🔹 Validate Full Name (Must include at least one space)
    if (!name.includes(" ")) {
      Swal.fire({
        title: "Invalid Name",
        text: "Please enter your full name.",
        icon: "error",
        confirmButtonColor: "#007BFF",
      });
      return;
    }

    // 🔹 Validate Phone Number (At least 10 digits)
    if (!/^\d{10,}$/.test(phone)) {
      Swal.fire({
        title: "Invalid Phone Number",
        text: "Please enter a valid phone number (minimum 10 digits).",
        icon: "error",
        confirmButtonColor: "#007BFF",
      });
      return;
    }

    // 🔹 Validate Inquiry Type
    if (!inquiryType) {
      Swal.fire({
        title: "Inquiry Type Required",
        text: "Please select an inquiry type.",
        icon: "error",
        confirmButtonColor: "#007BFF",
      });
      return;
    }

    const formData = new FormData(form);
    formData.append("access_key", "bbaf041b-112b-4712-9986-32ba4c624d5f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: `Thank You, ${name.split(" ")[0]}!`,
        text: "Message Sent Successfully!",
        icon: "success",
        confirmButtonColor: "#007BFF",
        confirmButtonText: "OK",
      }).then(() => {
        form.reset(); 
        setIsChecked(false); 
      });
    } else {
      Swal.fire({
        title: "Error",
        text: data.message,
        icon: "error",
        confirmButtonColor: "#007BFF",
      });
    }
  };

  return (
    <motion.section
      className="ContactSection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="ContactContainer">
        <motion.form
          className="ContactForm"
          onSubmit={onSubmit}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="Input-Title">Send Us a Message</h3>

          {/* Full Name */}
          <div className="InputGroup">
            <input type="text" name="name" placeholder="Full Name *" required />
          </div>

          {/* Phone and Email */}
          <div className="InputGroup">
            <input type="text" name="phone" placeholder="639123456789" required />
            <input type="email" name="email" placeholder="Email *" required />
          </div>

          {/* Inquiry Type */}
          <div className="InputGroup">
            <select name="inquiryType" required>
              <option value="">Inquiry Type *</option>
              <option value="general">General Inquiry</option>
              <option value="project">Project Inquiry</option>
              <option value="support">Support</option>
            </select>
          </div>

          {/* Message */}
          <textarea name="message" placeholder="Tell us something about your project" required />

          {/* Hidden Fields for Web3Forms */}
          <input type="hidden" name="from_name" value="" />
          <input type="hidden" name="subject" value="New Message from Your Website" />

          {/* Privacy Policy Checkbox */}
          <div className="PrivacyPolicy">
            <label className="CustomCheckbox">
              <input 
                type="checkbox" 
                name="acceptPolicy" 
                checked={isChecked} 
                onChange={(e) => setIsChecked(e.target.checked)} 
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

          {/* Submit Button */}
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
      
      <div className="SocialLinks">
      <h2>Follow Us Here</h2>
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
    </div>
    <FAQ/>
    </motion.section>

    
  );
};

export default Contact;
