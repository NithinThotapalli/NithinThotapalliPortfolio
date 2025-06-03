
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 interactive ${
              activeSection === item.id
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-700'
            }`}
          >
            <span className="relative z-10">{item.label}</span>
            <div
              className={`absolute inset-0 bg-white rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'opacity-20 scale-100'
                  : 'opacity-0 scale-95 group-hover:opacity-10 group-hover:scale-100'
              }`}
            />
            <div
              className={`absolute left-0 top-1/2 w-1 h-6 bg-gray-900 transform -translate-y-1/2 transition-all duration-300 ${
                activeSection === item.id
                  ? 'opacity-100 -translate-x-2'
                  : 'opacity-0 -translate-x-4'
              }`}
            />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
