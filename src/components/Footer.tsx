import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-gray-700/30 mt-16 sm:mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TB</span>
              </div>
              <span className="font-bold text-lg text-white">Tusharkanta Behera</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Passionate about technology, cybersecurity, and creating innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a 
                href="#about" 
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                About
              </a>
              <a 
                href="#experience" 
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:tusharkantabehera85@gmail.com"
                className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a 
                href="https://github.com/tusharkanta-behera"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/tusharkanta-behera/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/30 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tusharkanta Behera. All rights reserved.
            </p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center justify-center sm:justify-end space-x-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="hidden sm:inline">using React & Tailwind</span>
            <span className="sm:hidden">React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
