import React, { useState } from "react";
import "./Blogs.css";
import { motion } from "framer-motion";
import blog1 from "../../assets/blog-web-design-types.jpg";
import blog2 from "../../assets/blog-mascots-design.jpg";
import blog3 from "../../assets/blog-dark-interfaces.jpg";
import blog4 from "../../assets/blog-functional-art.jpg";
import blog5 from "../../assets/blog-bitex-case.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Web Design: 5 Basic Types of Images for Web Content",
    description:
      "Insights into visual web content: check different types of graphics used to make web design beautiful.",
    image: blog1,
    category: "Processes and Tools",
  },
  {
    id: 2,
    title: "The Power of Mascots in UI and Branding",
    image: blog2,
    category: "Branding",
  },
  {
    id: 3,
    title: "14 Elegant Interfaces Using Dark Background",
    image: blog3,
    category: "UI/UX",
  },
  {
    id: 4,
    title: "Functional Art: 10 Big Reasons to Apply Illustrations in UI Design",
    image: blog4,
    category: "Illustration",
  },
  {
    id: 5,
    title: "Case Study: Bitex, UX Design for Stock Analysis App",
    image: blog5,
    category: "Case Study",
  },
];

const Blogs = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  return (
    <section className="blog-section">
      <div className="container">
        <motion.h2
          className="blog-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Blog
        </motion.h2>
        <p className="blog-description">
          Share minimalist design tips, digital strategies, and insights into creating effective solutions.
        </p>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className={`blog-item ${index === 0 ? "main-blog" : "side-blog"}`}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <span className="blog-category">{post.category}</span>
                <h3>{post.title}</h3>
                {expandedPost === post.id ? (
                  <p className="blog-description-expanded">{post.description}</p>
                ) : null}
                <button
                  className="read-more"
                  onClick={() =>
                    setExpandedPost(expandedPost === post.id ? null : post.id)
                  }
                >
                  {expandedPost === post.id ? "Read Less" : "Read More"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;