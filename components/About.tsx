import React, { useState } from 'react';

/**
 * Handles image loading errors by hiding the failed image and showing a fallback message.
 * @param e - The error event from the image element
 * @param setShowFallback - State setter to control fallback visibility
 */
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, setShowFallback: (show: boolean) => void) => {
  const img = e.currentTarget;
  img.style.display = 'none';
  setShowFallback(true);
};

const About: React.FC = () => {
  const [metricsError, setMetricsError] = useState(false);
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-purple-600 rounded-2xl transform rotate-1 opacity-20"></div>

          <div className="glass-panel rounded-2xl p-8 md:p-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
              <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                <p>
                  I am <strong className="text-slate-900 dark:text-white">Yossi Shor</strong>, a Full Stack Developer based in <span className="text-brand-500 dark:text-brand-400 font-semibold">Ramat Gan, Israel</span>. I believe that the best code is written with clarity, purpose, and a deep understanding of the user's needs.
                </p>
                <p>
                  Since <span className="text-brand-500 dark:text-brand-400 font-semibold">2021</span>, I've been working as a Digital Marketing Developer, building websites and digital solutions for clients including work with <a href="https://github.com/mark-it-ing" className="text-brand-500 dark:text-brand-400 hover:underline" target="_blank" rel="noopener noreferrer">Mark-It-Ing</a>. I hold a <span className="text-slate-900 dark:text-white font-semibold">BSc in Electrical Engineering</span> and have enhanced my skills through professional certifications including Full Stack Development (iNT college, Grade 99) and Data Engineering, plus specialized training in Machine Learning, Deep Learning, and Cyber Security (Azure, Checkpoint, Windows Servers).
                </p>
                <p>
                  I specialize in the <span className="text-slate-900 dark:text-white">React ecosystem</span> and modern JavaScript/TypeScript development, while also having deep expertise in Python for data engineering and backend services. From building interactive flight management systems to creating Twitter-like social apps and marketing websites, I bring versatility and technical depth to every project.
                </p>
                <p>
                  Check out my code on <a href="https://github.com/yosshor" className="text-brand-500 dark:text-brand-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> with 32+ repositories, or connect with me on <a href="https://www.linkedin.com/in/yossishor/" className="text-brand-500 dark:text-brand-400 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> to see my professional journey.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="p-6 bg-slate-100 dark:bg-dark-900/50 rounded-xl border border-slate-200 dark:border-white/5 text-center hover:bg-slate-200 dark:hover:bg-dark-900/80 transition-colors">
                <span className="block text-4xl font-bold text-brand-500 dark:text-brand-400 mb-2">735+</span>
                <span className="text-slate-600 dark:text-slate-400 font-medium">LinkedIn Followers</span>
              </div>
              <div className="p-6 bg-slate-100 dark:bg-dark-900/50 rounded-xl border border-slate-200 dark:border-white/5 text-center hover:bg-slate-200 dark:hover:bg-dark-900/80 transition-colors">
                <span className="block text-4xl font-bold text-purple-500 dark:text-purple-400 mb-2">35+</span>
                <span className="text-slate-600 dark:text-slate-400 font-medium">GitHub Repositories</span>
              </div>
              <div className="p-6 bg-slate-100 dark:bg-dark-900/50 rounded-xl border border-slate-200 dark:border-white/5 text-center hover:bg-slate-200 dark:hover:bg-dark-900/80 transition-colors">
                <span className="block text-4xl font-bold text-green-500 dark:text-green-400 mb-2">99</span>
                <span className="text-slate-600 dark:text-slate-400 font-medium">Certification Grade</span>
              </div>
            </div>

            {/* GitHub Metrics Widget */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">GitHub Activity</h3>
              <div className="bg-slate-100 dark:bg-dark-900/50 rounded-xl p-4 border border-slate-200 dark:border-white/5 relative">
                {metricsError ? (
                  <div className="text-center py-8 text-slate-600 dark:text-slate-400">
                    <p className="text-sm mb-2">Unable to load GitHub metrics</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mb-3">This is likely a GitHub API issue</p>
                    <a href="https://github.com/yosshor" target="_blank" rel="noopener noreferrer" className="text-brand-500 dark:text-brand-400 hover:underline text-sm">
                      View profile on GitHub →
                    </a>
                  </div>
                ) : (
                  <img
                    src="https://raw.githubusercontent.com/yosshor/Yossi-Shor-Portfolio/main/github-metrics.svg"
                    alt="GitHub Metrics"
                    className="w-full"
                    onError={(e) => handleImageError(e, setMetricsError)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
