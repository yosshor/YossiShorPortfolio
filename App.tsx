import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
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
        
        {/* Contact Section Simple Mock */}
        <section id="contact" className="py-24 bg-dark-900">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
            <p className="text-slate-400 mb-8">
              I'm currently available for new opportunities. Whether you have a project in mind, need consulting, or just want to connect, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:yossishor@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-600 rounded-lg hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 focus:ring-offset-dark-900"
              >
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/yossishor/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 glass-panel rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 focus:ring-offset-dark-900"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/yosshor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 glass-panel rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 focus:ring-offset-dark-900"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;