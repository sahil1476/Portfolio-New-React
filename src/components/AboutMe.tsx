
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
      backgroundGif: 'https://www.gifcen.com/wp-content/uploads/2024/11/venom-gif-2.gif',
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
      backgroundGif: 'https://usagif.com/wp-content/uploads/gifs/gif-marvel-44.gif',
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
      backgroundGif: 'https://cdna.artstation.com/p/assets/images/images/020/449/458/original/felipe-chaves-drstrange-turntable-2.gif?1567798728',
      items: [
        { name: 'MongoDB', icon: <Database className="text-[#47A248]" size={20} /> },
        { name: 'PostgreSQL', icon: <Database className="text-[#336791]" size={20} /> },
        { name: 'MySql', icon: <Database className="text-[#FFCA28]" size={20} /> },
        
      ]
    },
    { 
      icon: <Globe size={24} />, 
      name: 'Other Tools', 
      backgroundGif: 'https://media0.giphy.com/media/DzQW7lWHq8xq4zmcU3/giphy.gif?cid=6c09b95232gyzc4r7vs407wh6d3kq76yzoidkfi0i22eniry&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s',
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
        {/* <h2 className="text-4xl font-bold mb-12 text-center glow-text">About Me</h2> */}
        <div className=" flex items-center justify-center bg-[#0d1117]">
      <h2 className="image-text text-6xl text-center md:text-9xl font-bold mb-6" style={{
        backgroundImage: 'url(https://upload-os-bbs.hoyolab.com/upload/2022/06/04/163932367/569b87e2b0c3c11960fe3abf47b83179_5495270848398525506.gif)',
        backgroundSize: 'cover',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}>
        About Me
      </h2>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 ">
            <p className="text-lg text-gray-300 leading-relaxed bg-gradient-to-r from-pink-500 via-yellow-500 to-red-500 bg-clip-text text-transparent tracking-wider">
              Hello! I'm Sahil Sharma, a passionate web developer with bachelor of technology in Computer Science Engineering. 
              I specialize in building exceptional digital experiences that combine beautiful design with efficient functionality.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed bg-gradient-to-r from-blue-600 via-yellow-200 to-red-500 bg-clip-text text-transparent tracking-wider">
              My journey in web development started during my Second year of college, and since then, 
              I've been constantly learning and exploring new technologies to create innovative solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed bg-gradient-to-r from-blue-700 via-violet-500 to-red-400 bg-clip-text text-transparent tracking-wider">
              Currently, I am working in Data Analysis And with a strong foundation in web development technologies and practical experience from 
              my tenure at "Xenonstack", I am eager to bring my skills and enthusiasm to your team.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          </div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{skills.map((category, index) => (
        <div 
          key={index} 
          className="bg-[#161b22] p-6 rounded-lg transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/20"
          style={{
            backgroundImage: `url(${category.backgroundGif})`, // Dynamically set the GIF for each card
            backgroundSize: 'cover', // Ensures the GIF covers the entire card
            backgroundPosition: 'center', // Centers the GIF within the card
            backgroundRepeat: 'no-repeat', // Prevents the GIF from repeating
            opacity: 0.91 // Adjust opacity to not overpower the text
          }}
        >
          <div className="text-[#f3f3f3] mb-4 flex items-center gap-2">
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
