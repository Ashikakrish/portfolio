import React from 'react';
import { ChevronDown, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              👋 Hello, I'm Ashika and I'm a passionate developer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Computer Science
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Engineering
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-600 font-light">
                & Web Developer
              </span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start text-gray-600 mb-8">
              <MapPin size={20} className="mr-2" />
              <span>Based in Tenkasi, Tamil Nadu</span>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              An entry-level Computer Science Engineering student with a passion for creating 
              impactful software experiences and solving complex technical challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200 font-medium text-center"
              >
                View My Work
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-8xl">👩‍💻</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ChevronDown size={32} className="text-gray-400 animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;