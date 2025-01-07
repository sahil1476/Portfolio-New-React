import React from 'react';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen space-background">
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;