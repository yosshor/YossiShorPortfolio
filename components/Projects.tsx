import React from 'react';
import { Project } from '../types';
import { GithubIcon, CodeIcon } from './Icons';

const projects: Project[] = [
  {
    id: 1,
    title: "DevOps Infrastructure",
    description: "Modern DevOps infrastructure setup and automation tools with Python. Recently updated with CI/CD pipelines, containerization, and cloud deployment configurations.",
    image: "https://picsum.photos/seed/devops/600/400",
    tags: ["Python", "DevOps", "Docker", "CI/CD"],
    github: "https://github.com/yosshor/devops"
  },
  {
    id: 2,
    title: "Airflow Dashboard",
    description: "Apache Airflow monitoring and management dashboard built with modern JavaScript. Provides real-time insights into data pipeline workflows and task execution.",
    image: "https://picsum.photos/seed/airflow/600/400",
    tags: ["JavaScript", "Apache Airflow", "Dashboard", "Data Engineering"],
    github: "https://github.com/yosshor/airflow-dashboard"
  },
  {
    id: 3,
    title: "Flights Management System",
    description: "Full-featured flight booking and management application with real-time search, booking capabilities, and admin panel. Built for the FullStack March 2024 course.",
    image: "https://picsum.photos/seed/flights/600/400",
    tags: ["TypeScript", "React", "Full Stack", "REST API"],
    github: "https://github.com/yosshor/Flights-mrc24"
  },
  {
    id: 4,
    title: "Twitter Clone App",
    description: "Social media application inspired by Twitter with features like posting, following, likes, and real-time updates. Modern UI with TypeScript.",
    image: "https://picsum.photos/seed/twitter/600/400",
    tags: ["TypeScript", "React", "Social Media", "Real-time"],
    github: "https://github.com/yosshor/Twitter-App"
  },
  {
    id: 5,
    title: "Food Catalog",
    description: "Food items catalog application with search, filtering, and management capabilities. Clean TypeScript architecture with modern UI patterns.",
    image: "https://picsum.photos/seed/food/600/400",
    tags: ["TypeScript", "React", "Catalog System", "UI/UX"],
    github: "https://github.com/yosshor/Food_Catalog"
  },
  {
    id: 6,
    title: "Recipe Management System",
    description: "Full-stack recipe management application built with Node.js backend. Features recipe creation, editing, and organization with user authentication.",
    image: "https://picsum.photos/seed/recipe/600/400",
    tags: ["TypeScript", "Node.js", "Full Stack", "MongoDB"],
    github: "https://github.com/yosshor/Recipe-Management"
  },
  {
    id: 7,
    title: "Site to App Wrapper",
    description: "Innovative wrapper solution to convert websites into native-like applications. Provides app-like experience for web content with TypeScript.",
    image: "https://picsum.photos/seed/wrapper/600/400",
    tags: ["TypeScript", "React", "PWA", "Wrapper"],
    github: "https://github.com/yosshor/wrapper_site_to_app"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-slate-400">A selection of my recent work. Check out the code on GitHub.</p>
          </div>
          <a href="https://github.com/yosshor" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 font-medium flex items-center gap-1 group">
            View Github <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.2)] border-white/5">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white p-1">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white p-1">
                      <CodeIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-dark-800 text-slate-300 rounded border border-white/5">
                      {tag}
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

export default Projects;