import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

const Footer = () => (
  <footer className="bg-dark-950 py-8 border-t border-white/5 text-center">
    <p className="text-slate-500 text-sm">
      © {new Date().getFullYear()} Yossi Shor. Built with React, Tailwind & Gemini.
    </p>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="bg-dark-950 min-h-screen text-slate-200 selection:bg-brand-500 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ContactForm />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;