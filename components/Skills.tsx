import React from 'react';
import { LayoutIcon, DatabaseIcon, SettingsIcon } from './Icons';

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, accessible, and performant user interfaces with modern frameworks.",
    icon: <LayoutIcon className="w-8 h-8 text-brand-500" />,
    skills: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "Redux", "Responsive Design", "SEO"]
  },
  {
    title: "Backend & AI/ML",
    description: "Creating robust server-side logic, deep learning models, and data processing solutions.",
    icon: <DatabaseIcon className="w-8 h-8 text-purple-500" />,
    skills: ["Node.js", "Python", "Deep Learning", "Machine Learning", "Sound Recognition", "Apache Airflow", "MongoDB", "REST APIs"]
  },
  {
    title: "DevOps & Security",
    description: "Infrastructure management, cloud services, and cybersecurity implementations.",
    icon: <SettingsIcon className="w-8 h-8 text-green-500" />,
    skills: ["Azure", "Checkpoint", "Windows Server", "Docker", "Git/GitHub", "Jupyter", "Streamlit", "Network Security"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-dark-950">
      {/* Optional Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to build end-to-end solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl border-t border-white/10 hover:border-brand-500/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed min-h-[40px]">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-dark-800 hover:bg-brand-900/30 border border-slate-700 hover:border-brand-500/50 rounded-md text-xs text-slate-300 hover:text-brand-300 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;