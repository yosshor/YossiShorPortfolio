import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-block animate-fade-in-up">
              <span className="px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">
                Open to Opportunities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">Yossi Shor</span>
            </h1>
            
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-400 leading-relaxed">
              Digital Marketing Developer from Ramat Gan, Israel. BSc in Electrical Engineering with expertise in React, TypeScript, Python, and Deep Learning. Since 2021, I've been building marketing websites and digital solutions. Certified Full Stack Developer (Grade 99) with experience in sound recognition and AI technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <a href="#projects" className="px-8 py-3.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] w-full sm:w-auto text-center">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-lg glass-panel text-white font-medium hover:bg-white/10 transition-all w-full sm:w-auto text-center">
                Contact Me
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/5">
              <a href="https://github.com/yosshor" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
                <GithubIcon className="w-7 h-7" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/yossishor/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <LinkedinIcon className="w-7 h-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:yossishor30@gmail.com" className="text-slate-400 hover:text-brand-400 transition-colors transform hover:scale-110">
                <MailIcon className="w-7 h-7" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-none">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Abstract Shapes behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-purple-600 rounded-[2rem] rotate-6 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-dark-800 rounded-[2rem] rotate-3 border border-white/10"></div>
              
              {/* Image Container */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-dark-900">
                <img 
                  src="/yossiShor.jpg" 
                  alt="Yossi Shor" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to GitHub avatar if profile image not found
                    e.currentTarget.src = 'https://avatars.githubusercontent.com/u/54455502?v=4';
                  }}
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-dark-900 p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-white">Full Stack Dev</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;