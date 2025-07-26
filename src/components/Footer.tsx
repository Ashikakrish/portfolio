import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Ashika<span className="text-blue-400">.</span>
            </div>
            <p className="text-gray-400 mb-4">
              Computer Science Engineering student passionate about creating innovative 
              software solutions and meaningful user experiences.
            </p>
            <p className="text-gray-400 text-sm">
              Based in Tenkasi, Tamil Nadu
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>ashikasubashri.g.cse.2022@snsct.org</p>
              <p>+91 7418788938</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/Subashri05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/ashikakrish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/ashikakrish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and</span>
            <Code size={16} className="text-blue-400" />
            <span>powered by</span>
            <Coffee size={16} className="text-yellow-600" />
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Ashika Subashri G. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            "I declare that all the details provided are true to the best of my knowledge"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;