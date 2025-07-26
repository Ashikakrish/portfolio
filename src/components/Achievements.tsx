import React from 'react';
import { Trophy, Star, Users, Code, Award, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "District Level Chess Champion",
      description: "Won district level chess championship in grade 9",
      category: "Sports",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Runner-Up in National Security Ideathon",
      description: "Secured second position in National Security Ideathon conducted by NCC",
      category: "Competition",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Smart India Hackathon Participant",
      description: "Participated in SIH 2023 and 2024, advancing to inter-college level",
      category: "Hackathon",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Ideathon Participant",
      description: "Participated in Ideathon by Yavarum Kelir Skill Development Association",
      category: "Innovation",
      color: "text-green-600 bg-green-100"
    }
  ];

  const activities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Technical Event Lead",
      description: "Conducted Inter-college level Technical Event (Coding Event) as a lead in SNSCT"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development Club Coordinator",
      description: "Coordinating Web Development Club in SNSCT"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Executive Member - Xenix Club",
      description: "Executive member of Xenix club at SNSCT"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "YRC Volunteer",
      description: "Active Youth Red Cross volunteer and campus event volunteer"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition, leadership roles, and contributions to the community
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Trophy className="mr-3 text-yellow-600" />
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${achievement.color}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{achievement.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${achievement.color}`}>
                        {achievement.category}
                      </span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities & Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Users className="mr-3 text-blue-600" />
            Leadership & Activities
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    {activity.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h4>
                    <p className="text-gray-600 text-sm">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Impact Summary</h3>
            <p className="text-blue-100">Making a difference through technology and leadership</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2+</div>
              <div className="text-blue-100 text-sm">Hackathons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-blue-100 text-sm">Leadership Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100 text-sm">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1</div>
              <div className="text-blue-100 text-sm">Chess Championship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;