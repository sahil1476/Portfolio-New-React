import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: ' Wallpaper Hub',
    description: 'A platform where you can explore, download, and enjoy stunning high-resolution wallpapers for your devices.',
    image: 'https://wallpapercat.com/w/full/c/4/0/171494-3200x1680-desktop-hd-up-cartoon-background.jpg',
    technologies: ['React', 'tailwind', 'react-route'],
    github: 'https://wallpaperhub-sahil.netlify.app/',
    demo: 'https://wallpaperhub-sahil.netlify.app/'
  },
  {
    title: ' Password Manager',
    description: 'A secure, animated, and responsive password manager built with React, Local Storage, and Framer Motion for smooth animations. Manage and store your passwords locally without compromising security!',
    image: 'https://www.propertyware.com/wp-content/uploads/2014/01/password-security.jpg',
    technologies: ['React', 'LocalStorage','Framer Motion','Tailwind CSS '],
    github: 'https://github.com/sahil1476/Password-Generator',
    demo: 'https://password-generator-wheat-phi.vercel.app/'
  },
  {
    title: ' Animated Gaming Web',
    description: 'A gaming-themed web project built using React and GSAP (GreenSock Animation Platform).',
    image: 'https://imageio.forbes.com/specials-images/imageserve/6531307511096cbdafbfb009/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
    technologies: ['React', 'GSAP - GreenSock Animation Platform '],
    github: 'https://github.com/sahil1476/GSAP-animation-React',
    demo: 'https://animated-gsap-react.netlify.app/'
  },
  {
    title: ' Nike Clone App',
    description: 'A modern, fully responsive e-commerce Nike Clone built with React & Tailwind CSS. This project replicates the Nike store experience with an intuitive UI, animations, and dynamic product listings.',
    image: 'https://wallpaper.dog/large/17291932.jpg',
    technologies: ['React','Tailwind CSS '],
    github: 'https://github.com/sahil1476/NikeClone',
    demo: 'https://nike-clone-six-rho.vercel.app/'
  },
  {
    title: ' Help Center App',
    description: 'A full-stack web application similar to Stack Overflow, designed to help users find answers to queries, share solutions, and contribute knowledge.',
    image: 'https://plus.unsplash.com/premium_vector-1720931652728-72862ec52914?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Node.js', 'Postgres', 'Express'],
    github: 'https://github.com/sahil1476/Developer-Help-Center',
    demo: 'https://developer-help-center.vercel.app/'
  },
  {
    title: 'Task Management App',
    description: 'This is a simple note-taking application built using React. The app allows users to create, view, edit, delete, and search notes. The notes are stored in the browser local storage.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
    technologies: ['React', 'LocalStorage', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/sahil1476/Note-Taking-Application',
    demo: 'https://notes-aplicationn.netlify.app/'
  },
  {
    title: 'SEA AND SEA ANIMALS',
    description: '"Sea and Sea Animals" is a React-based project that showcases various sea animals in a virtual aquarium. The project includes interactive elements, such as a simple mcq game in the screen.',
    image: 'https://plus.unsplash.com/premium_vector-1728723845644-94498eb49e83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2VhJTIwYW5pbWFscyUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D',
    technologies: ['React', 'Js', 'Css', 'Html'],
    github: 'https://github.com/sahil1476/Sea-and-Sea-animals',
    demo: 'https://sea-and-sea-animals.vercel.app/'
  },
  {
    title: 'ProductOrderList',
    description: 'This is an Angular application that allows users to select products and quantities, add them to an order, and use text-to-speech functionality to read the order out loud. The project showcases basic Angular features, form handling, and integration with a text-to-speech API.',
    image: 'https://plus.unsplash.com/premium_vector-1726930891972-51b64c411a44?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2FydCUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    technologies: ['Angular', 'Ts', 'Css', 'Html', 'Text-to-Speech API'],
    github: 'https://github.com/sahil1476/Product-list-Angular',
    demo: 'https://product-list-angular-sandy.vercel.app/'
  },
  {
    title: 'FIFA 22 Analysis',
    description: 'This is a Data Analysis Project on FIFA 22 Video Game. Contains a collection of Python scripts demonstrating data analysis and visualization techniques using three popular libraries: Pandas, Matplotlib, and Seaborn.',
    image: 'https://plus.unsplash.com/premium_vector-1721089734329-50377b223e3c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZpZmElMjAyMiUyMGdhbWV8ZW58MHx8MHx8fDA%3D',
    technologies: ['Pyhton', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    github: 'https://github.com/sahil1476/Python-for-Data-Science/tree/main/data_science_project',
    demo: 'https://github.com/sahil1476/Python-for-Data-Science/tree/main/data_science_project'
  },
  {
    title: 'Baseball Analysis',
    description: 'BASEBALL Analysis is an interactive dashboard project built using R and Shiny. The primary goal of this project is to provide insights into player performance at various positions on the baseball field. The dashboard incorporates user inputs and filters, enabling data exploration and customization to cater to diverse use cases.',
    image: 'https://plus.unsplash.com/premium_vector-1729561974390-eb5b0ad4346a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJhc2ViYWxsfGVufDB8fDB8fHww',
    technologies: ['R', 'shiny', 'ggplot2', 'dplyr'],
    github: 'https://github.com/sahil1476/R-language-',
    demo: 'https://github.com/sahil1476/R-language-'
  },
  {
    title: 'Library Management System',
    description: ' a responsive web application using React.js , TailwndCSS and GoLang ensuring seamless data flow between frontend and backend. Request Book, Add and Update Book, Apprive or Reject Book Request',
    image: 'https://plus.unsplash.com/premium_vector-1720982089657-a16530b31696?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGlicmFyeSUyMG1hbmFnbWVudCUyMHN5c3xlbnwwfHwwfHx8MA%3D%3D',
    technologies: ['React.js', 'Go', 'Gin', 'Gorm'],
    github: 'https://github.com/sahil1476/LIbrary_management',
    demo: ''
  },
];



export function Projects() {
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-6">
      <div id="featured-projects" className=" flex items-center justify-center bg-[#0d1117]">
      <h2 className="image-text text-6xl text-center md:text-9xl font-bold mb-6" style={{
        backgroundImage: 'url(https://i.pinimg.com/originals/13/44/cd/1344cdb8afc60644ab100307da6c3487.gif)',
        backgroundSize: 'cover',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}>
        Featured Projects
      </h2>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className="bg-[#161b22] rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/20"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#58a6ff]/10 text-[#58a6ff] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} target='blank' className="flex items-center text-gray-400 hover:text-[#58a6ff] transition-colors">
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a href={project.demo} target='blank' className="flex items-center text-gray-400 hover:text-[#58a6ff] transition-colors">
                    <ExternalLink size={20} className="mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
