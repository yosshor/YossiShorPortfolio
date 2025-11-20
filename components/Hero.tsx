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
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm <br className="hidden lg:block" />
              <span 
                className="bg-gradient-to-r from-brand-400 to-purple-400"
                style={{
                  background: 'linear-gradient(to right, #0ea5e9, #a855f7)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  borderRadius: '10px',
                  padding: '10px',
                }}
              >
                Yossi Shor
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Digital Marketing Developer from Ramat Gan, Israel. BSc in Electrical Engineering with expertise in React, TypeScript, Python, and Deep Learning. Since 2021, I've been building marketing websites and digital solutions. Certified Full Stack Developer (Grade 99) with experience in sound recognition and AI technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <a href="#projects" className="px-8 py-3.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] w-full sm:w-auto text-center">
                View My Work
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-lg glass-panel text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-all w-full sm:w-auto text-center">
                Contact Me
              </a>
              <a 
                href="/PDF/C.V - Yossi Shor.pdf" 
                download="Yossi_Shor_CV.pdf"
                className="px-8 py-3.5 rounded-lg glass-panel text-slate-900 dark:text-white font-medium hover:bg-slate-200 dark:hover:bg-white/10 transition-all w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200 dark:border-white/5">
              <a href="https://github.com/yosshor" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110">
                <GithubIcon className="w-7 h-7" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/yossishor/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                <LinkedinIcon className="w-7 h-7" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:yossishor30@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors transform hover:scale-110">
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
              <div className="absolute inset-0 bg-slate-200 dark:bg-dark-800 rounded-[2rem] rotate-3 border border-slate-300 dark:border-white/10"></div>
              
              {/* Image Container */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-2 border-slate-300 dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-dark-900">
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
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-900 p-4 rounded-xl border border-slate-300 dark:border-white/10 shadow-xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">Full Stack Dev</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;