import React from 'react';
import { Code, Database, Palette, Zap } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Building end-to-end web applications"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Generative AI",
      description: "Exploring AI-driven solutions"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Prompt Engineering",
      description: "Optimizing AI interactions"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Creating beautiful user interfaces"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated Computer Science Engineering student with a passion for 
            creating innovative solutions and meaningful software experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Currently pursuing B.E in Computer Science and Engineering at SNS College of Technology 
              with a CGPA of 9.4. I'm eager and adept at collaborating with diverse teams to develop 
              creative technical solutions for complex software engineering problems.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With hands-on experience in web development, AI technologies, and various programming 
              languages, I've worked on projects ranging from CCTV monitoring systems to AI-driven 
              safety tools. I'm passionate about creating impactful software experiences that solve 
              real-world problems.
            </p>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">9.4</div>
                <div className="text-sm text-gray-600">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-sm text-gray-600">Internships</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <div className="text-blue-600 mb-4">{interest.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {interest.title}
                </h4>
                <p className="text-gray-600 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and contribute to 
            meaningful software solutions. Let's connect and create something amazing!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;