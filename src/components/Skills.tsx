import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "ReactJS", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "WordPress", level: 75 }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Git/GitHub", level: 85 },
        { name: "Canva", level: 90 }
      ]
    },
    {
      title: "Emerging Technologies",
      skills: [
        { name: "Generative AI", level: 75 },
        { name: "Machine Learning", level: 70 },
        { name: "Prompt Engineering", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Proficiencies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: "🚀", title: "Fast Learner", desc: "Quick to adapt new technologies" },
            { icon: "🤝", title: "Team Player", desc: "Excellent collaboration skills" },
            { icon: "💡", title: "Problem Solver", desc: "Creative solution finder" },
            { icon: "🎯", title: "Detail Oriented", desc: "High attention to quality" }
          ].map((trait, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{trait.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{trait.title}</h4>
              <p className="text-gray-600 text-sm">{trait.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;