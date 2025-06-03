import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    
    {
      title: 'WeatherApp',
      description: 'A sleek and responsive weather app that displays real-time weather information based on user location or search input.',
      tech: ['HTML', 'Javascript', 'CSS', 'Weatherstack API'],
      github: 'hhttps://github.com/NithinThotapalli/WeatherApp',
      live: null, // No live demo
      
    },
    {
      title: 'Habit Tracker ',
      description: 'A minimal and intuitive habit tracker app to help users build consistency and track daily progress.',
      tech: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/NithinThotapalli/habit-tracker',
      live: 'https://nithinthotapalli.github.io/habit-tracker/',
      image: '/images/habit-tracker.png' // No live demo
    },
     {
      title: 'SQL Injection Using React.Js',
      description: 'An educational full-stack web app demonstrating how SQL injection vulnerabilities work — and how to prevent them.',
      tech: ['React.js', 'CSS', 'Node.js', 'Express.js', 'SQLite3'],
      github: 'https://github.com/NithinThotapalli/sql-injection',
      live: null, // Example live link
    },
    {
      title: 'RedditAutoPoster',
      description: 'A powerful Reddit automation tool that allows users to schedule and post content across multiple subreddits effortlessly.',
      tech: ['Python', 'PRAW'],
  
      github: 'https://github.com/NithinThotapalli/RedditAutoPoster',
      live: null, // No live demo
      image: '/images/Reddit_Logo.png', // <-- Add this line
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen px-4 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects that showcase my passion for creating innovative, 
            user-centric solutions with cutting-edge technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 interactive ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-contain h-full w-full"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors interactive"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors interactive"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
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
