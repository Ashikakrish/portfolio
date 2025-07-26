import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "EYE 24 SOLUTION",
      duration: "1 Month",
      location: "Project-based",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "MySQL"],
      description: "Developed a CCTV monitoring web app for a security agency with a user-friendly UI, dynamic pricing, and real-time data updates, enhancing efficiency and client interactions.",
      type: "Project"
    },
    {
      title: "Web Developer",
      company: "DELAUTO SOLUTIONS",
      duration: "1.5 - 2 months",
      location: "Project-based",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
      description: "Developed a responsive, SEO-optimized website featuring course listings, industrial visit details, certificate verification, and a contact form, enhancing user engagement and online presence.",
      type: "Project"
    },
    {
      title: "Web Development Intern",
      company: "TECHSNAPIE SOLUTIONS",
      duration: "Internship",
      location: "Remote",
      technologies: ["Web Development", "Frontend", "Backend"],
      description: "Gained hands-on experience in full-stack web development, working on various client projects and learning industry best practices.",
      type: "Internship"
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Acmegrade",
      duration: "12/09/2023 – 12/10/2024",
      location: "Remote",
      technologies: ["Machine Learning", "Deep Learning", "Data Processing", "AI"],
      description: "Gained hands-on experience in Artificial Intelligence, working on machine learning models, deep learning algorithms, and data processing techniques. Developed and optimized AI solutions for real-world applications.",
      type: "Internship"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and key projects that have shaped my skills
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm hidden md:block"></div>
                
                <div className="md:ml-16">
                  <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <ExternalLink size={16} className="mr-2" />
                          {experience.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-end text-right">
                        <div className="flex items-center text-gray-600 mb-1">
                          <Calendar size={16} className="mr-2" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin size={16} className="mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 inline-flex items-center text-sm text-gray-500">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        experience.type === 'Internship' ? 'bg-green-500' : 'bg-purple-500'
                      }`}></div>
                      {experience.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;