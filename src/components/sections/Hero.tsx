
import { useEffect, useState } from 'react';
import ScrollIndicator from '../ScrollIndicator';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
            <span className="block gradient-text">Nithin</span>
            <span className="block gradient-text">Thotapalli</span>
          </h1>
        </div>

        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide mb-8">
            Creative Developer & Problem Solver
          </p>
        </div>

        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with passion, precision, and a touch of artistry. 
            Where creativity meets code, and problems find elegant solutions.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
