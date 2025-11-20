import React from 'react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: 1,
    role: "Digital Marketing Developer",
    company: "Mark-It-Ing & Various Clients",
    period: "2021 - Present",
    description: "Building marketing websites and digital solutions for diverse clients. Developing responsive, SEO-optimized websites using modern web technologies including React, TypeScript, and Node.js. Creating custom web applications, landing pages, and full-stack solutions that drive conversions and enhance online presence for businesses. Active contributor with 32+ GitHub repositories.",
    technologies: ["React", "TypeScript", "JavaScript", "Node.js", "HTML5", "CSS3", "SEO"]
  },
  {
    id: 2,
    role: "Full Stack Developer Certification",
    company: "iNT college - Institute of Innovation & Technology",
    period: "Mar 2024 - Apr 2025",
    description: "Comprehensive full-stack development course achieving Grade 99. Built diverse web applications including flight management systems, Twitter-like social apps, recipe management tools, and e-commerce platforms. Mastered modern frameworks, full-stack architecture patterns, and both frontend & backend development.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "REST APIs", "Git", "Full Stack"]
  },
  {
    id: 3,
    role: "Data Engineering & Big Data Training",
    company: "Professional Training (Naya Project)",
    period: "2023",
    description: "Intensive data engineering program including the Naya Project. Learned to implement data pipelines, analytics solutions, and big data processing. Developed expertise in Streamlit applications for data visualization, Jupyter notebooks for data analysis, and machine learning workflows using Python and Apache Airflow.",
    technologies: ["Python", "Apache Airflow", "Pandas", "Jupyter", "Streamlit", "SQL", "Big Data"]
  },
  {
    id: 4,
    role: "Deep Learning & Sound Recognition",
    company: "abilisense",
    period: "Oct 2019 - Apr 2020",
    description: "Full-time role focusing on deep learning and sound recognition technologies. Worked on innovative audio analysis projects involving construction and wiring of racks containing power source equipment (ZES, Regatron, NI digital I/O). Applied machine learning and deep learning techniques to real-world audio processing challenges.",
    technologies: ["Python", "Deep Learning", "Machine Learning", "Sound Recognition", "Audio Processing"]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My professional experience and continuous learning in web development and data engineering.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px md:before:mx-auto before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-dark-900 bg-brand-500 group-hover:bg-brand-400 transition-colors shadow-[0_0_15px_rgba(14,165,233,0.5)] absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 shrink-0">
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-xl border-t border-white/10 hover:border-brand-500/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">{exp.role}</h3>
                  <span className="text-xs font-mono py-1 px-2 rounded bg-dark-800 text-slate-400 border border-slate-700 mt-2 sm:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-brand-500 font-medium text-sm mb-3">{exp.company}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;