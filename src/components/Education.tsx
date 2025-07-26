import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.E - Computer Science and Engineering",
      institution: "SNS College of Technology, Coimbatore",
      duration: "2022 - 2026",
      grade: "9.4 CGPA",
      status: "Pursuing",
      description: "Specializing in software development, AI technologies, and full-stack web development"
    },
    {
      degree: "12th - Computer Science",
      institution: "Sri Jayendra Matriculation Higher Secondary School, Tenkasi",
      duration: "2021 - 2022",
      grade: "91%",
      status: "Completed",
      description: "Strong foundation in computer science fundamentals and mathematics"
    },
    {
      degree: "10th Standard",
      institution: "Sri Jayendra Matriculation Higher Secondary School, Tenkasi",
      duration: "2019 - 2020",
      grade: "87%",
      status: "Completed",
      description: "Excellent academic performance with focus on science and mathematics"
    }
  ];

  const certifications = [
    {
      title: "Generative AI Foundations",
      issuer: "AWS Academy",
      description: "Comprehensive understanding of generative AI technologies and applications"
    },
    {
      title: "Raspberry Pi Workshop",
      issuer: "IIT Madras",
      description: "Hands-on experience with IoT development and embedded systems"
    },
    {
      title: "Vortex'24 Workshop",
      issuer: "NIT Trichy",
      description: "Advanced technical workshop on emerging technologies"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and continuous learning achievements
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" />
            Academic Background
          </h3>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                  </div>
                  
                  <div className="lg:text-right lg:ml-8">
                    <div className="flex items-center text-gray-600 mb-2 lg:justify-end">
                      <Calendar size={16} className="mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center mb-2 lg:justify-end">
                      <Award size={16} className="mr-2 text-green-600" />
                      <span className="font-semibold text-green-600">{edu.grade}</span>
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Pursuing' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="mr-3 text-purple-600" />
            Certifications & Workshops
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="text-purple-600 mb-4">
                  <Award size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-purple-600 font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">9.4</div>
              <div className="text-blue-100">Current CGPA</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4+</div>
              <div className="text-blue-100">Years of Study</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-blue-100">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Courses Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;