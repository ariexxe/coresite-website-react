import './Home.css';
import Hero from '../components/Hero/Hero';
import Mission from '../components/Mission/Mission';
import About from '../components/About/About';
import ServicesSection from '../components/Services/Services_component';
import Featured from '../components/Featured/Featured';
import OurTeam from '../components/Team/OurTeam';
import Blog from '../components/Blog/Blogs';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contacts';


const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Mission /> 
      <About />
      <OurTeam />
      <ServicesSection />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Home;