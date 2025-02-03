import './Hero.css'
import astoImg from '/src/assets/asto.png';
import { Instagram, Facebook, Mail, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0d1117]" />
        <div className="lightning" />
        
        {/* Animated Planets */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${20 + Math.random() * 60}%`,
              width: `${100 + Math.random() * 150}px`,
              height: `${100 + Math.random() * 150}px`,
              background: `radial-gradient(circle at 30% 30%, 
                hsl(${210 + Math.random() * 40}, 70%, 50%), 
                hsl(${210 + Math.random() * 40}, 70%, 20%))`,
              opacity: 0.2,
              transform: 'translateZ(0)',
              animation: `float ${10 + Math.random() * 10}s infinite`
            }}
          />
        ))}
        
        {/* Stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random(),
              animation: `twinkle ${3 + Math.random() * 4}s infinite`
            }}
          />
        ))}
        
        {/* Floating Astronaut */}
        <img
          src={astoImg}
          alt="Astronaut"
          className="absolute astronaut-animation"
        />
      </div>
      
      <div className="relative container mx-auto px-6 py-20 text-center text-white">
      
      <div className="container mx-auto px-6 py-20 text-center drop-in-animation">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
          Sahil Sharma
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#58a6ff] ">
          Aspiring Web Developer | Bachelor of Technology CSE
        </p>
{/*         social icons */}
{/*         <div className="flex justify-center md:justify-start space-x-6 mt-6 mb-10">
                <a href="https://www.instagram.com/ssahilsharma_/" className="transform hover:scale-125 transition-transform duration-300 text-pink-500 hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-500">
                  <Instagram className="w-9 h-9" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100012746700006" className="transform hover:scale-125 transition-transform duration-300 text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-600">
                  <Facebook className="w-9 h-9" />
                </a>
                <a href="https://www.linkedin.com/in/sahil-sharma-34989519a/" className="transform hover:scale-125 transition-transform duration-300 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">
                  <Linkedin className="w-9 h-9" />
                </a>
                <a 
                  href="mailto:krsahilsharma07@gmail.com" 
                  className="transform hover:scale-125 transition-transform duration-300 text-gray-700 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-200"
                >
                  <Mail className="w-9 h-9" />
                </a>

              </div> */}
      </div>  
        <div className="flex justify-center space-x-6">
          <a 
            href="#projects" 
            className="bg-[#2d6fbbaf] hover:bg-[#58a6ff]/80 text-white px-6 py-3 rounded-lg transition-colors glow-button"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-[#58a6ff] hover:bg-[#58a6ff]/10 text-[#58a6ff] px-6 py-3 rounded-lg transition-colors glow-button"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
