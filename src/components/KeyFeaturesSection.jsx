import React from 'react';
import { FaUserFriends, FaLock, FaGamepad, FaRobot, FaClipboardCheck, FaComments } from 'react-icons/fa';

const KeyFeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Mentorship Matching",
      description: "Personalized mentor recommendations based on user profiles, skills, and interests.",
      icon: <FaUserFriends className="text-4xl text-blue-500 transition-transform duration-300 group-hover:scale-110" />
    },
    {
      title: "Blockchain-Based Data Privacy",
      description: "Secure personal data and fundraising initiatives through blockchain technology.",
      icon: <FaLock className="text-4xl text-blue-500 transition-transform duration-300 group-hover:scale-110" />
    },
    {
      title: "Gamified Role-Based Access Control (RBAC)",
      description: "Unlock features through user engagement and completion of profile tasks.",
      icon: <FaGamepad className="text-4xl text-blue-500 transition-transform duration-300 group-hover:scale-110" />
    },
    {
      title: "AI Chatbot and Content Moderation",
      description: "Real-time assistance and NLP-powered moderation of user-generated content.",
      icon: <FaRobot className="text-4xl text-blue-500 transition-transform duration-300 group-hover:scale-110" />
    },
    {
      title: "Event Management",
      description: "Organize and participate in mentorship programs, workshops, and contests.",
      icon: <FaClipboardCheck className="text-4xl text-blue-500 transition-transform duration-300 group-hover:scale-110" />
    },
    {
      title: "Private and Group Chat Features",
      description: "Facilitate focused networking and live mentorship sessions.",
      icon: <FaComments className="text-4xl text-blue-500 transition-transform duration-300 group-hover:scale-110" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#C33764] to-[#1D2671]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-400 text-center mb-12">
          Key Features
        </h2>
        
        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4">
                {feature.icon}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
