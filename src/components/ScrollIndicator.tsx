
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-40 interactive"
      onClick={scrollToNext}
    >
      <div className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors">
        <span className="text-sm font-light mb-2 tracking-wide">SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
