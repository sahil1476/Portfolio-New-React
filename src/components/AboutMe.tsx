import React from 'react';
import { 
  Code2, Database, Globe, Server,
  Braces, FileJson, Terminal, Cpu,
  Blocks, Layers, Box, Palette,
  GitBranch, Container, Cloud, Monitor
} from 'lucide-react';

export function AboutMe() {
  const skills = [
    { 
      icon: <Code2 size={24} />, 
      name: 'Frontend', 
      items: [
        { name: 'React', icon: <Blocks className="text-[#61DAFB]" size={20} /> },
        { name: 'TypeScript', icon: <FileJson className="text-[#3178C6]" size={20} /> },
        { name: 'Next.js', icon: <Layers className="text-white" size={20} /> },
        { name: 'Tailwind', icon: <Palette className="text-[#38BDF8]" size={20} /> }
      ]
    },
    { 
      icon: <Server size={24} />, 
      name: 'Backend', 
      items: [
        { name: 'Node.js', icon: <Terminal className="text-[#339933]" size={20} /> },
        { name: 'Express', icon: <Box className="text-[#000000]" size={20} /> },
        { name: 'Python', icon: <Braces className="text-[#3776AB]" size={20} /> },
        { name: 'Java', icon: <Cpu className="text-[#007396]" size={20} /> }
      ]
    },
    { 
      icon: <Database size={24} />, 
      name: 'Database', 
      items: [
        { name: 'MongoDB', icon: <Database className="text-[#47A248]" size={20} /> },
        { name: 'PostgreSQL', icon: <Database className="text-[#336791]" size={20} /> },
        { name: 'MySql', icon: <Database className="text-[#FFCA28]" size={20} /> },
        
      ]
    },
    { 
      icon: <Globe size={24} />, 
      name: 'Other Tools', 
      items: [
        { name: 'Git', icon: <GitBranch className="text-[#F05032]" size={20} /> },
        { name: 'Docker', icon: <Container className="text-[#2496ED]" size={20} /> },
        { name: 'Linux', icon: <Monitor className="text-[#FCC624]" size={20} /> }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0d1117] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center glow-text">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Sahil Sharma, a passionate web developer with bachelor of technology in Computer Science Engineering. 
              I specialize in building exceptional digital experiences that combine beautiful design with efficient functionality.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development started during my Second year of college, and since then, 
              I've been constantly learning and exploring new technologies to create innovative solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently, I am working in Data Analysis And with a strong foundation in web development technologies and practical experience from 
              my tenure at "Xenonstack", I am eager to bring my skills and enthusiasm to your team. .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <div 
                key={index} 
                className="bg-[#161b22] p-6 rounded-lg transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/20"
              >
                <div className="text-[#58a6ff] mb-4 flex items-center gap-2">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 hover:text-[#58a6ff] transition-colors">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}