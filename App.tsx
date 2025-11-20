import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

const Footer = () => (
  <footer className="bg-slate-100 dark:bg-dark-950 py-8 border-t border-slate-200 dark:border-white/5 text-center transition-colors">
    <p className="text-slate-600 dark:text-slate-500 text-sm">
      © {new Date().getFullYear()} Yossi Shor. Built with React, Tailwind & Gemini.
    </p>
  </footer>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-dark-950 min-h-screen text-slate-900 dark:text-slate-200 selection:bg-brand-500 selection:text-white transition-colors">
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <ContactForm />
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
};

export default App;