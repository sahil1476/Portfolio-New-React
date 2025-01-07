import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#58a6ff]">Sahil Sharma</h3>
            <p className="text-gray-400">
              Aspiring web developer passionate about creating innovative solutions.
            </p>
          </div>
          <div className="transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-[#58a6ff]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#58a6ff] transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-[#58a6ff] transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-[#58a6ff] transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#58a6ff] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="transform hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-[#58a6ff]">Connect</h3>
      <ul className="space-y-2">
        <li>
          <a
            href="https://github.com/sahil1476/"
            className="flex items-center text-gray-400 hover:text-[#58a6ff] transition-colors"
          >
            <FaGithub className="mr-2" /> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sahil-sharma-34989519a/"
            className="flex items-center text-gray-400 hover:text-[#58a6ff] transition-colors"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="mailto:krsahilsharma07@gmail.com"
            className="flex items-center text-gray-400 hover:text-[#58a6ff] transition-colors"
          >
            <FaEnvelope className="mr-2" /> Email
          </a>
        </li>
      </ul>
    </div>

        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center group">
            Made with <Heart size={16} className="mx-1 text-red-500 group-hover:animate-pulse" /> by Sahil Sharma
          </p>
          <p className="text-gray-500 text-sm mt-2">&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}