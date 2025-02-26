import './Hero.css'
import astoImg from '/src/assets/asto.png';
import { Instagram, Facebook, Mail, Linkedin } from 'lucide-react';

export function Hero() {
  const planetGifs = [
    'https://i.pinimg.com/originals/37/39/3f/37393f39848461fd160c105ea868dd2a.gif', 
    'https://www.icegif.com/wp-content/uploads/2022/04/icegif-432.gif', 
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0d1117]" />
        <div className="lightning" />
        
        {/* Animated Planets */}
        {planetGifs.map((gif, i) => (
          <img
            key={i}
            src={gif}
            alt={`Planet ${i + 1}`}
            className="absolute"
            style={{
              top: `${18 + Math.random() * 60}%`, // Random position from top
              left: `${10 + Math.random() * 60}%`, // Random position from left
              width: `${100 + Math.random() * 200}px`, // Random width between 100px and 300px
              height: 'auto', // Maintain aspect ratio of the GIF
              opacity: 0.8, // Adjust opacity if needed
              animation: `float ${10 + Math.random() * 15}s infinite`, // Floating effect
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
      
{/*       <div className="container mx-auto px-6 py-20 text-center drop-in-animation">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text">
          Sahil Sharma
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#58a6ff] ">
          Aspiring Web Developer | Bachelor of Technology CSE
        </p>

      </div>   */}
        <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="image-text text-6xl md:text-9xl font-bold mb-6">
          Sahil Sharma
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-[#58a6ff]">
          Aspiring Web Developer | Bachelor of Technology CSE
        </p>
      </div>
        <div className="flex justify-center space-x-6">
          <a 
            href="#projects" 
            className="bg-[#2d6fbbaf] hover:bg-[#58a6ff]/80 text-white px-6 py-3 rounded-lg transition-colors glow-button"
            style={{
            backgroundImage: 'url(https://media2.giphy.com/media/kimWBtJDjWcwFH2nRB/giphy.gif?cid=6c09b9523y4evljwsd0kw0bwd0qllkeyeba4orgik84wf5lh&ep=v1_stickers_search&rid=giphy.gif&ct=s)', 
            backgroundSize: 'cover', // Makes sure the GIF covers the button
            backgroundPosition: 'center', // Centers the GIF in the button
               }}
          >
              View Projects
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-[#58a6ff] hover:bg-[#58a6ff]/10 text-[#1b1008] px-6 py-3 rounded-lg transition-colors glow-button"
            style={{
            backgroundImage: 'url(https://media2.giphy.com/media/xThuWx4ooOJhE3Gx3y/giphy.gif?cid=6c09b952iw99t7vdf164knez6v72xremh1fco8i3umc4gza3&ep=v1_gifs_search&rid=giphy.gif&ct=g)', 
            backgroundSize: 'cover', // Makes sure the GIF covers the button
            backgroundPosition: 'center', // Centers the GIF in the button
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
