import React from "react";
import { motion } from "framer-motion";
import "./Blog.css";
import WebDesign from "../../src/assets/blog-web-design-types-illustration1.png"; 
import GameChanging from "../../src/assets/blog-game-changing-web-design-illustration2.png";
import UserExperience from "../../src/assets/blog-minimalism-web-user-experience-illustration3.png";
import Mascots from "../../src/assets/blog-mascots-design.jpg";
import UIInspiration from "../../src/assets/blog-dark-interfaces.jpg";
import Illustration from "../../src/assets/blog-functional-art.jpg";
import Bitex from "../../src/assets/blog-bitex-case.jpg";
import Workspace from "../../src/assets/blog-workspace-ui.png";
import UIApp from "../../src/assets/blog-ui-app.png";
import Memorable from "../../src/assets/blog-memorable-logos.png";
import InterfaceDesign from "../../src/assets/blog-interface-design-2025.png";
import ArtShapes from "../../src/assets/blog-art-shapes-user-experience.png";

const BlogsPost = [
  { category: "Branding", title: "Design Me Live: The Power of Mascots in UI and Branding", image: Mascots },
  { category: "UI/UX", title: "UI Inspiration: 14 Elegant Interfaces Using Dark Background", image: UIInspiration },
  { category: "Illustration", title: "Functional Art: 10 Big Reasons to Apply Illustrations in UI Design", image: Illustration },
  { category: "Case Study", title: "Case Study: Bitex. UX Design for Stock Analysis App", image: Bitex },
  { category: "Branding", title: "Design Me Live: The Power of Mascots in UI and Branding", image: Workspace },
  { category: "UI/UX", title: "UI Inspiration: 14 Elegant Interfaces Using Dark Background", image: UIApp },
];

const BlogRecommendations = [
  { category: "Brand Identity", title: "Creating Memorable Logos: The Art Behind Strong Branding", image: Memorable },
  { category: "UI Trends", title: "Modern UI: 10 Inspiring Interface Designs for 2025", image: InterfaceDesign },
  { category: "Digital Art", title: "Illustration in Web Design: How Art Shapes User Experience", image: ArtShapes },
];

const Blog = () => {
  return (
    <motion.section 
      className="BlogContainer"
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Blog Header */}
      <motion.div 
        className="BlogHeader"
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2>Blog</h2>
        <p>Stay up to date with weekly content including tips, inspiration, features, and company news.</p>
      </motion.div>

      {/* Best of the Week Section */}
      <motion.div 
        className="BestOfWeek"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h3>Best of the week</h3>
        <a href="#">See all posts →</a>
      </motion.div>

      {/* Blog Grid Layout */}
      <div className="BlogGrid">
        <motion.div 
          className="BlogCard LargeCard"
          style={{ backgroundImage: `url(${GameChanging})` }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="TextOverlay">
            <h4>PROCESSES AND TOOLS</h4>
            <h3>10 Game-Changing Web Design Trends for 2025</h3>
            <p>Stay ahead with these groundbreaking web design trends! From dynamic animations to AI-driven interfaces.</p>
          </div>
        </motion.div>

        <div className="LeftBlogs">
          {[WebDesign, UserExperience].map((image, index) => (
            <motion.div 
              key={index}
              className="BlogCard SmallCard"
              style={{ backgroundImage: `url(${image})` }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="TextOverlay">
                <h4>Design Principles</h4>
                <h3>How Minimalism Transforms Web User Experience</h3>
                <p>Learn how adopting minimalist design can boost engagement and simplify navigation.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      

      {/* Blog List Section */}
      <motion.section className="BlogListContainer">
        <motion.div className="BlogListHeader" whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.2 }}>
          <h2>Discover the latest in...</h2>
        </motion.div>

        <motion.div 
          className="FilterBar"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <button className="FilterButton">
              Filter by <span>▴</span>
          </button>
        </motion.div>

        <motion.div className="BlogCardGrid"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {BlogsPost.map((blog, index) => (
            <motion.div className="CardContainer" key={index} whileHover={{ scale: 1.05 }}>
              <div className="Card">
                <div className="ImgContent" style={{ backgroundImage: `url(${blog.image})` }}></div>
                <div className="Content">
                  <p className="Category">{blog.category}</p>
                  <p className="Heading">{blog.title}</p>
                  <a href="#">Read More...</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Recommended Blogs */}
      <motion.section className="BlogListContainer">
        <h3 className="RecommendedTitle">Recommended for you</h3>
        <motion.div className="BlogCardGrid"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {BlogRecommendations.map((blog, index) => (
            <motion.div className="CardContainer" key={index} whileHover={{ scale: 1.05 }}>
              <div className="Card">
                <div className="ImgContent" style={{ backgroundImage: `url(${blog.image})` }}></div>
                <div className="Content">
                  <p className="Category">{blog.category}</p>
                  <p className="Heading">{blog.title}</p>
                  <a href="#">Read More...</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.section>
  );
};

export default Blog;
