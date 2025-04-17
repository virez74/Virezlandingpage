import { useRef } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';
import projectsData from '../data/projects.json';

export default function Home() {
  const topRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleLogoClick = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={topRef}>
      <NavBar onLogoClick={handleLogoClick} />
      <div id="top" />
      <Hero onExploreClick={handleExploreClick} />
      <section id="about" ref={aboutRef}><AboutMe /></section>
      <div id="projects" ref={projectsRef}>
        <ProjectsGrid projects={projectsData} />
      </div>
      <section id="contact" ref={contactRef}><Footer /></section>
    </div>
  );
}
