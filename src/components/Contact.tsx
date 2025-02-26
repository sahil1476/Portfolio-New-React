import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0d1117]">
  
      <div className="container mx-auto px-6">
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-12 text-yellow-400 font-[Comic Sans MS]">
  Get In Touch
</h2>

        {/* Bento Grid with 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Contact Card 1: Information */}
          <div className="border-2 border-red-600 p-8 rounded-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/10">
            <h3 className="text-2xl font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <a href="mailto:krsahilsharm07@gmail.com" className="text-gray-400 hover:text-[#58a6ff] transition-colors text-lg">
                  krsahilsharm07@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="tel:+919015034738" className="text-gray-400 hover:text-[#58a6ff] transition-colors text-lg">
                  +91 9015034738
                </a>
              </div>
            </div>
          </div>

          {/* GIF Card 1 */}
          <div className="relative rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-contain bg-center"
              style={{
                backgroundImage: "url('https://64.media.tumblr.com/230b437a688b0827cd48cc8607cbdc47/tumblr_nabck4lRqM1qiylhgo1_500.gif')", 
                height: "auto",
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            ></div>
          </div>

          {/* GIF Card 2 */}
          <div className="relative rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e4ea0b19-2cb4-48d7-bc1d-74f80502a71d/d6kdxyg-0decf60d-fa63-4c3d-925d-6f81dcad99c1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U0ZWEwYjE5LTJjYjQtNDhkNy1iYzFkLTc0ZjgwNTAyYTcxZFwvZDZrZHh5Zy0wZGVjZjYwZC1mYTYzLTRjM2QtOTI1ZC02ZjgxZGNhZDk5YzEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yDIHKGbuT_bmav4rqftvih8751iMuxkfblArxpA3-MI')", // Replace with your desired GIF
                height: '100%',
                backgroundSize: 'cover',
              }}
            ></div>
          </div>
{/* Contact Card 2: Social Media */}
<div className="border-2 border-blue-600 p-8 rounded-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#58a6ff]/20 relative group">
  {/* Remove h3 as requested */}
  <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-6">

    {/* GitHub Icon with Hover Effect */}
    <a
      href="https://github.com/sahil1476/"
      className="transform transition-transform duration-300 text-gray-400 hover:text-[#58a6ff] p-2 group-hover:text-[#58a6ff]"
    >
      <Github className="w-8 h-8 transition-transform group-hover:scale-110" />
    </a>

    {/* LinkedIn Icon with Hover Effect */}
    <a
      href="https://www.linkedin.com/in/sahil-sharma-34989519a/"
      className="transform transition-transform duration-300 text-blue-500 hover:text-blue-600 p-2 group-hover:text-blue-400"
    >
      <Linkedin className="w-8 h-8 transition-transform group-hover:scale-110" />
    </a>

    {/* Mail Icon with Hover Effect */}
    <a
      href="mailto:krsahilsharm07@gmail.com"
      className="transform transition-transform duration-300 text-gray-400 hover:text-[#58a6ff] p-2 group-hover:text-[#58a6ff]"
    >
      <Mail className="w-8 h-8 transition-transform group-hover:scale-110" />
    </a>

    {/* Phone Icon with Hover Effect */}
    <a
      href="tel:+919015034738"
      className="transform transition-transform duration-300 text-gray-400 hover:text-[#58a6ff] p-2 group-hover:text-[#58a6ff]"
    >
      <Phone className="w-8 h-8 transition-transform group-hover:scale-110" />
    </a>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
