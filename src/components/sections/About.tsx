
import { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section ref={sectionRef} id="about" className="min-h-screen flex items-center px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold gradient-text">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600" />
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate developer who believes in the power of clean code and thoughtful design. 
                My journey began with curiosity and has evolved into a deep love for creating digital experiences 
                that not only function flawlessly but also inspire and delight users.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Every project is an opportunity to push boundaries, explore new technologies, and solve complex 
                problems with elegant solutions. I thrive on challenges that require both technical expertise 
                and creative thinking.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline section */}
        <div className={`mt-32 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center mb-16 gradient-text">My Journey</h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300" />
            
            <div className="space-y-16">
              {[
                { year: '2019', title: 'Started Programming', desc: 'Discovered the magic of code' },
                { year: '2021', title: 'First Professional Role', desc: 'Joined as a junior developer' },
                { year: '2023', title: 'Full-Stack Mastery', desc: 'Expanded expertise across the stack' },
                { year: '2024', title: 'Creative Leadership', desc: 'Leading innovative projects' },
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 interactive">
                      <div className="text-sm text-gray-500 font-medium">{item.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h4>
                      <p className="text-gray-600 mt-2">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
