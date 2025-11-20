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
  credentialUrl?: string;
  credentialId?: string;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Full Stack Developer Certification",
    institution: "iNT college - Institute of Innovation & Technology",
    period: "Mar 2024 - Apr 2025",
    grade: "99",
    type: "certification",
    description: "Full Stack Web Development (Frontend & Backend) - 564-hour comprehensive program focused on both frontend and backend development.",
    credentialUrl: "/certifications/int-cert-fullstack.png",
    credentialId: "INT28281I40",
    achievements: [
      "Achieved exceptional grade of 99/100",
      "Built complete web applications using Node.js, Express, React, and SQL databases",
      "Mastered TypeScript, React.js, and modern development practices",
      "Completed real-world full-stack projects"
    ]
  },
  {
    id: 2,
    degree: "Big Data Engineer",
    institution: "NAYA College",
    period: "Jun 2022 - Apr 2023",
    type: "certification",
    description: "Data Engineering course (320 academic hours) focusing on big data technologies and data pipeline development. Completed April 2023.",
    credentialUrl: "/certifications/BigData.jpg",
    achievements: [
      "320 hours of intensive training",
      "Python programming for data engineering",
      "Apache Spark Streaming for big data processing",
      "Designed and implemented data architectures",
      "Built scalable data pipelines and ETL processes"
    ]
  },
  {
    id: 3,
    degree: "Cyber Security Specialist",
    institution: "ITQ college",
    period: "May 2021 - Aug 2021",
    type: "certification",
    description: "Practical training program in the field of servers, networks, SOC, and Firewalls in a joint program with leading cybersecurity companies.",
    credentialUrl: "https://drive.google.com/file/d/1y70RxQCQXlNHRdhJN8km5sUFeFUk37kN/view?usp=sharing",
    credentialId: "1y70RxQCQXlNHRdh",
    achievements: [
      "Server administration and configuration (Azure, Windows Server)",
      "Network security implementation",
      "Security Operations Center (SOC) operations",
      "Firewall management (Checkpoint) and protection strategies"
    ]
  },
  {
    id: 4,
    degree: "Electrical and Electronics Engineering",
    institution: "Ben-Gurion University of the Negev",
    period: "2020 - 2021",
    type: "course",
    description: "Advanced courses in Electronics & Physics Field including semiconductor technology and electronic systems.",
    achievements: [
      "Semiconductor device physics",
      "Electronic circuit analysis",
      "Physics field applications",
      "Advanced electronics concepts"
    ]
  },
  {
    id: 5,
    degree: "Deep Learning & Machine Learning Bootcamp",
    institution: "Primrose",
    period: "2019 - 2020",
    type: "course",
    description: "Comprehensive bootcamp covering theoretical and practical implementation of machine learning algorithms and deep learning.",
    achievements: [
      "Linear and Logistic regression algorithms",
      "K-Nearest Neighbors (KNN) implementation",
      "Neural network architectures with PyTorch",
      "Practical ML project development"
    ]
  },
  {
    id: 6,
    degree: "BSc, Electrical and Electronics Engineering",
    institution: "Shenkar - Engineering. Design. Art.",
    period: "2014 - 2018",
    type: "degree",
    description: "Bachelor of Science degree in Electrical and Electronics Engineering with comprehensive coursework in engineering fundamentals.",
    achievements: [
      "Strong foundation in electrical engineering principles",
      "Circuit design and electronics systems",
      "Signal processing and communications",
      "Relevant coursework in engineering applications"
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
    <section id="education" className="py-24 relative bg-white dark:bg-dark-950">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 dark:bg-green-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Education & Certifications</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Academic background, professional certifications, and continuous learning journey in technology.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((item) => (
            <div 
              key={item.id} 
              className="glass-panel rounded-2xl p-4 sm:p-6 md:p-8 border-t border-slate-200 dark:border-white/10 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} text-white text-xs font-bold uppercase`}>
                      {getTypeLabel(item.type)}
                    </span>
                    {item.grade && (
                      <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-500/20 border border-green-300 dark:border-green-500/30 text-green-700 dark:text-green-300 text-xs font-bold">
                        Grade: {item.grade}
                      </span>
                    )}
                    {item.credentialId && (
                      <span className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-500/20 border border-slate-300 dark:border-slate-500/30 text-slate-700 dark:text-slate-300 text-xs font-mono">
                        ID: {item.credentialId}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-500 dark:group-hover:text-brand-400 transition-colors">
                    {item.degree}
                  </h3>
                  
                  <p className="text-brand-600 dark:text-brand-400 font-medium text-base sm:text-lg mb-2">
                    {item.institution}
                  </p>
                  
                  {item.description && (
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  )}
                  
                  {item.credentialUrl && (
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mt-3">
                      <a 
                        href={item.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] w-full sm:w-auto"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Certificate
                      </a>
                      <a 
                        href={item.credentialUrl} 
                        download
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] w-full sm:w-auto"
                        title="Download Certificate"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </a>
                    </div>
                  )}
                </div>

                <div className="md:text-right">
                  <span className="inline-block px-4 py-2 rounded-lg bg-slate-200 dark:bg-dark-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 text-sm font-mono">
                    {item.period}
                  </span>
                </div>
              </div>

              {item.achievements && item.achievements.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/5">
                  <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-3">
                    Key Highlights:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm">
                        <svg 
                          className="w-5 h-5 text-brand-600 dark:text-brand-400 flex-shrink-0 mt-0.5" 
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
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-panel rounded-xl p-6 text-center border-t border-green-500/20">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">BSc</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Shenkar (2014-2018)</p>
          </div>

          <div className="glass-panel rounded-xl p-6 text-center border-t border-brand-500/20">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-brand-500 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">99</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Full Stack Grade</p>
          </div>

          <div className="glass-panel rounded-xl p-6 text-center border-t border-purple-500/20">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">5</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Certifications & Courses</p>
          </div>

          <div className="glass-panel rounded-xl p-6 text-center border-t border-cyan-500/20">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-500 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">884+</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Academic Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

