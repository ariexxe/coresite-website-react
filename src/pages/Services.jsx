import React from "react";
import "./Services.css"; // Ensure to create a CSS file for styling

const Services = () => {
  return (
    <div className="service-page">
      <section className="services">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Empowering Your Business With Tailored Solutions Designed To Achieve Results.
        </p>
        <p className="services-intro">
          At CoreSite, we focus on simplifying digital experiences through functional, clean, and beautiful designs. We believe that less is more, and simplicity can drive impact.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <img src="path/to/web-design-image.jpg" alt="Web Design & Development" />
            <h3>Web Design & Development</h3>
            <p>Clean, functional websites for businesses or individuals.</p>
          </div>

          <div className="service-card">
            <img src="path/to/consulting-image.jpg" alt="Consulting Services" />
            <h3>Consulting Services</h3>
            <p>Personalized advice to enhance your digital presence.</p>
          </div>

          <div className="service-card">
            <img src="path/to/digital-marketing-image.jpg" alt="Digital Marketing Solutions" />
            <h3>Digital Marketing Solutions</h3>
            <p>SEO, content strategy, and digital campaigns.</p>
          </div>

          <div className="service-card">
            <img src="path/to/branding-image.jpg" alt="Branding & Identity" />
            <h3>Branding & Identity</h3>
            <p>Simple yet effective logo and visual identity creation.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Trusted by businesses worldwide, we deliver exceptional results.
        </p>
        <div className="client-count">
          <span className="count">150+</span>
          <span className="label">Happy Clients</span>
        </div>

        <div className="testimonial-card">
          <div className="client-info">
            <img src="path/to/client-image.jpg" alt="Maria Fernandez" className="client-image" />
            <h3>Maria Fernandez</h3>
            <p>Founder, Bloom Marketing</p>
          </div>
          <blockquote className="testimonial">
            "CoreSite transformed our online presence! Their team understood our vision and delivered a stunning website. Our sales increased by 40% in the first month!"
          </blockquote>
          <div className="rating">
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </div>

        <div className="featured-logos">
          <span>Featured on:</span>
          <img src="path/to/logo1.png" alt="Logo 1" />
          <img src="path/to/logo2.png" alt="Logo 2" />
          <img src="path/to/logo3.png" alt="Logo 3" />
          <img src="path/to/logo4.png" alt="Logo 4" />
        </div>
      </section>
    </div>
  );
};

export default Services;