import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white py-12 relative">
      {/* Background GIFs */}
      <div
        className="absolute bottom-0 left-0 w-48 h-48 opacity-90 mt-10"
        style={{
          backgroundImage: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22669da7-b18f-4b93-9b79-c22048bdd2b4/dhdvui5-04d7df85-9627-4a12-b062-15fa8f97a6ee.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyNjY5ZGE3LWIxOGYtNGI5My05Yjc5LWMyMjA0OGJkZDJiNFwvZGhkdnVpNS0wNGQ3ZGY4NS05NjI3LTRhMTItYjA2Mi0xNWZhOGY5N2E2ZWUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fRrAqaGwN1FqmGqidgAYK8EwYiga7ptPSZsWyvIXpk0)', // Replace with the actual GIF URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-48 h-48 opacity-90 mt-10"
        style={{
          backgroundImage: 'url(https://media2.giphy.com/media/5hvKNH3QAA4jPaMfcG/200w.gif?cid=6c09b952jcq34u1hp89wnk40ouexk1qizg7hxup5i66isi52&ep=v1_stickers_search&rid=200w.gif&ct=s)', // Replace with the actual GIF URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

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
