
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Python/Django', level: 80 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Cloud Architecture', level: 75 },
  ];

  const experiences = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Labs',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Solutions Inc.',
      period: '2021 - 2023',
      description: 'Created responsive web applications and improved user experience across multiple platforms.',
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2021',
      description: 'Developed feature-rich applications and collaborated with cross-functional teams.',
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="min-h-screen px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Experience & Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous learning, growth, and mastery across various technologies and domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-8 gradient-text">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100 + 500}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-8 gradient-text">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 interactive"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {exp.role}
                    </h4>
                    <span className="text-sm text-gray-500 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-gray-700 font-medium mb-3">{exp.company}</div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '15+', label: 'Technologies Mastered' },
            { number: '5+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center group interactive">
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
