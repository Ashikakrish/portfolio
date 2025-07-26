import React from 'react';
import { ExternalLink, Github, Zap, Shield, Lightbulb, Music } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Security Force Web Application",
      description: "A comprehensive CCTV monitoring web application designed for security agencies with real-time monitoring capabilities, user-friendly interface, and dynamic pricing system.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "MySQL"],
      features: ["Real-time monitoring", "Dynamic pricing", "User management", "Data analytics"],
      category: "Web Application"
    },
    {
      title: "Shield Guard - COVID-19 Safety Tool",
      description: "An AI-driven safety tool for COVID-19 compliance featuring real-time monitoring, contactless operation, and automated alerts to ensure adherence to health guidelines.",
      icon: <Shield className="w-8 h-8" />,
      technologies: ["AI", "Computer Vision", "Python", "IoT"],
      features: ["Real-time monitoring", "Contactless operation", "Automated alerts", "Compliance tracking"],
      category: "AI Project"
    },
    {
      title: "Smart Energy Meter",
      description: "A smart energy monitoring system for automated power monitoring, consumption tracking, and remote access, enhancing accuracy, efficiency, and cost-effectiveness.",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["IoT", "Python", "Database", "Web Dashboard"],
      features: ["Automated monitoring", "Consumption tracking", "Remote access", "Cost analysis"],
      category: "IoT Project"
    },
    {
      title: "Song Recommendation by Face Recognition",
      description: "An innovative AI-driven music recommendation system that uses face recognition to analyze emotions and suggest mood-based playlists in real-time.",
      icon: <Music className="w-8 h-8" />,
      technologies: ["Python", "OpenCV", "Machine Learning", "Face Recognition"],
      features: ["Emotion detection", "Real-time analysis", "Mood-based playlists", "Personalized recommendations"],
      category: "AI Project"
    },
    {
      title: "Mechanical CADD Training Website",
      description: "A responsive, SEO-optimized website for Delauto Solutions featuring course listings, industrial visit details, certificate verification, and enhanced user engagement.",
      icon: <Lightbulb className="w-8 h-8" />,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
      features: ["Course listings", "Certificate verification", "Contact forms", "SEO optimization"],
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my work spanning web development, AI solutions, and innovative applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-200">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 text-sm font-medium">
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                    <Github size={16} className="mr-2" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Subashri05"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;