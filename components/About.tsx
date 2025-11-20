import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-2xl transform rotate-1 opacity-20"></div>
          
          <div className="glass-panel rounded-2xl p-8 md:p-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
               <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
               <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  I am <strong className="text-white">Yossi Shor</strong>, a Full Stack Developer based in <span className="text-brand-400 font-semibold">Ramat Gan, Israel</span>. I believe that the best code is written with clarity, purpose, and a deep understanding of the user's needs.
                </p>
                <p>
                  Since <span className="text-brand-400 font-semibold">2021</span>, I've been working as a Digital Marketing Developer, building websites and digital solutions for clients including work with <a href="https://github.com/mark-it-ing" className="text-brand-400 hover:underline" target="_blank" rel="noopener noreferrer">Mark-It-Ing</a>. I hold a <span className="text-white font-semibold">BSc in Electrical Engineering</span> and have enhanced my skills through professional certifications including Full Stack Development (iNT college, Grade 99) and Data Engineering, plus specialized training in Machine Learning, Deep Learning, and Cyber Security (Azure, Checkpoint, Windows Servers).
                </p>
                <p>
                  I specialize in the <span className="text-white">React ecosystem</span> and modern JavaScript/TypeScript development, while also having deep expertise in Python for data engineering and backend services. From building interactive flight management systems to creating Twitter-like social apps and marketing websites, I bring versatility and technical depth to every project.
                </p>
                <p>
                   Check out my code on <a href="https://github.com/yosshor" className="text-brand-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> with 32+ repositories, or connect with me on <a href="https://www.linkedin.com/in/yossishor/" className="text-brand-400 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> to see my professional journey.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="p-6 bg-dark-900/50 rounded-xl border border-white/5 text-center hover:bg-dark-900/80 transition-colors">
                <span className="block text-4xl font-bold text-brand-400 mb-2">735+</span>
                <span className="text-slate-400 font-medium">LinkedIn Followers</span>
              </div>
              <div className="p-6 bg-dark-900/50 rounded-xl border border-white/5 text-center hover:bg-dark-900/80 transition-colors">
                <span className="block text-4xl font-bold text-purple-400 mb-2">32+</span>
                <span className="text-slate-400 font-medium">GitHub Repositories</span>
              </div>
              <div className="p-6 bg-dark-900/50 rounded-xl border border-white/5 text-center hover:bg-dark-900/80 transition-colors">
                <span className="block text-4xl font-bold text-green-400 mb-2">99</span>
                <span className="text-slate-400 font-medium">Certification Grade</span>
              </div>
            </div>

            {/* GitHub Stats Widget */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-6 text-center">GitHub Activity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-dark-900/50 rounded-xl p-4 border border-white/5">
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=yosshor&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=0ea5e9&icon_color=a855f7&text_color=cbd5e1"
                    alt="GitHub Stats"
                    className="w-full"
                  />
                </div>
                <div className="bg-dark-900/50 rounded-xl p-4 border border-white/5">
                  <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=yosshor&layout=compact&theme=tokyonight&hide_border=true&bg_color=0f172a&title_color=0ea5e9&text_color=cbd5e1"
                    alt="Top Languages"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-4 bg-dark-900/50 rounded-xl p-4 border border-white/5">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=yosshor&theme=tokyonight&hide_border=true&background=0f172a&ring=0ea5e9&fire=a855f7&currStreakLabel=cbd5e1"
                  alt="GitHub Streak"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;