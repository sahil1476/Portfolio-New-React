import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white glow-text">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#161b22] p-8 rounded-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/20">
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:krsahilsharm07@gmail.com" className="flex items-center text-gray-400 hover:text-[#58a6ff] transition-colors">
                <Mail className="mr-3" size={20} />
                krsahilsharm07@gmail.com
              </a>
              <a href="tel: +919015034738" className="flex items-center text-gray-400 hover:text-[#58a6ff] transition-colors">
                <Phone className="mr-3" size={20} />
                +91 9015034738
              </a>
              <a href="https://github.com/sahil1476/" className="flex items-center text-gray-400 hover:text-[#58a6ff] transition-colors">
                <Github className="mr-3" size={20} />
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/sahil-sharma-34989519a/" className="flex items-center text-gray-400 hover:text-[#58a6ff] transition-colors">
                <Linkedin className="mr-3" size={20} />
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <div className="bg-[#161b22] p-8 rounded-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/20">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-[#0d1117] border border-gray-700 rounded-md focus:ring-[#58a6ff] focus:border-[#58a6ff] text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-[#0d1117] border border-gray-700 rounded-md focus:ring-[#58a6ff] focus:border-[#58a6ff] text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder='This is for Demo only To Connect Reach me on LinkedIn, Gmail ... '
                  rows={4}
                  className="w-full px-4 py-2 bg-[#0d1117] border border-gray-700 rounded-md focus:ring-[#58a6ff] focus:border-[#58a6ff] text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#58a6ff] text-white py-2 px-4 rounded-md hover:bg-[#58a6ff]/80 transition-colors glow-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}