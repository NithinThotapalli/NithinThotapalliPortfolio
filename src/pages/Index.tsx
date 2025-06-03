
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="custom-cursor overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
