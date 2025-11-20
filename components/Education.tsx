import React from 'react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  description?: string;
  achievements?: string[];
  type: 'degree' | 'certification' | 'course';
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Full Stack Developer Certification",
    institution: "iNT college - Institute of Innovation & Technology",
    period: "Mar 2024 - Apr 2025",
    grade: "99",
    type: "certification",
    description: "Comprehensive full-stack web development program covering frontend and backend technologies.",
    achievements: [
      "Achieved exceptional grade of 99/100",
      "Built 10+ real-world projects",
      "Mastered React, TypeScript, Node.js, and MongoDB",
      "Specialized in modern web architecture patterns"
    ]
  },
  {
    id: 2,
    degree: "BSc in Electrical Engineering",
    institution: "Academic Institution",
    period: "Completed",
    type: "degree",
    description: "Bachelor of Science degree with focus on electrical engineering fundamentals, electronics, and system design.",
    achievements: [
      "Strong foundation in mathematics and physics",
      "Circuit design and analysis",
      "Digital signal processing",
      "Embedded systems programming"
    ]
  },
  {
    id: 3,
    degree: "Data Engineering & Big Data",
    institution: "Naya Project - Professional Training",
    period: "2023",
    type: "course",
    description: "Intensive data engineering program focusing on big data technologies and data pipeline development.",
    achievements: [
      "Apache Airflow workflow orchestration",
      "Python data processing with Pandas",
      "Streamlit dashboard development",
      "Big data analytics and visualization"
    ]
  },
  {
    id: 4,
    degree: "Machine Learning & Deep Learning Bootcamp",
    institution: "Professional Training",
    period: "2019-2020",
    type: "course",
    description: "Comprehensive bootcamp covering machine learning algorithms, deep learning, and neural networks.",
    achievements: [
      "Deep learning with PyTorch",
      "Sound recognition technologies",
      "Neural network architectures",
      "Applied ML project development"
    ]
  },
  {
    id: 5,
    degree: "Computer & Network Security",
    institution: "Professional Training",
    period: "Completed",
    type: "course",
    description: "Intensive cybersecurity course covering cloud security, network protection, and enterprise systems.",
    achievements: [
      "Microsoft Azure cloud security",
      "Checkpoint firewall configuration",
      "Windows Server administration",
      "Network security best practices"
    ]
  }
];

const Education: React.FC = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'degree':
        return 'from-green-400 to-emerald-400';
      case 'certification':
        return 'from-brand-400 to-cyan-400';
      case 'course':
        return 'from-purple-400 to-pink-400';
      default:
        return 'from-brand-400 to-purple-400';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'degree':
        return 'Degree';
      case 'certification':
        return 'Certification';
      case 'course':
        return 'Course';
      default:
        return 'Education';
    }
  };

  return (
    <section id="education" className="py-24 relative bg-dark-950">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic background, professional certifications, and continuous learning journey in technology.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((item) => (
            <div 
              key={item.id} 
              className="glass-panel rounded-2xl p-8 border-t border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} text-white text-xs font-bold uppercase`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.grade && (
                      <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold">
                        Grade: {item.grade}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                    {item.degree}
                  </h3>
                  
                  <p className="text-brand-400 font-medium text-lg mb-2">
                    {item.institution}
                  </p>
                  
                  {item.description && (
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="md:text-right">
                  <span className="inline-block px-4 py-2 rounded-lg bg-dark-800 text-slate-300 border border-slate-700 text-sm font-mono">
                    {item.period}
                  </span>
                </div>
              </div>

              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/5">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                    Key Highlights:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                        <svg 
                          className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                          />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-xl p-6 text-center border-t border-green-500/20">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">BSc</h3>
            <p className="text-slate-400 text-sm">Electrical Engineering</p>
          </div>

          <div className="glass-panel rounded-xl p-6 text-center border-t border-brand-500/20">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">99</h3>
            <p className="text-slate-400 text-sm">Certification Grade</p>
          </div>

          <div className="glass-panel rounded-xl p-6 text-center border-t border-purple-500/20">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">4+</h3>
            <p className="text-slate-400 text-sm">Professional Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

