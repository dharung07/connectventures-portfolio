import React from 'react';

const GamifiedRBACAISection = () => {
    const features = [
        {
            title: "Gamified Role-Based Access Control (RBAC)",
            description: "Users can unlock different levels of access and features by completing profile tasks, achievements, and reaching engagement milestones.",
            imgSrc: 'https://pics.craiyon.com/2024-09-06/Ly12KfvjQ9WA20vobRLZ1A.webp',
        },
        {
            title: "AI-Powered User Experience",
            description: "Leverage AI models to provide personalized content, recommendations, and mentorship matches. The AI system adapts based on user behavior and preferences.",
            imgSrc: 'https://pics.craiyon.com/2024-09-06/NLE44OMhRtiAcRFjbeTvXQ.webp',
        },
        {
            title: "AI for Content Moderation",
            description: "Natural Language Processing (NLP) and AI tools automatically detect inappropriate content, ensuring a safe and engaging environment for all users.",
            imgSrc: 'https://pics.craiyon.com/2024-09-16/l5PTct-cQbK5kySfJxe3Jw.webp',
        },
        {
            title: "Secure Access with RBAC",
            description: "Role-Based Access Control (RBAC) ensures that users only have access to features and data based on their role, providing a secure and structured environment.",
            imgSrc: 'https://pics.craiyon.com/2024-09-04/h20ucRtgRN6hrTDbhPK1Ng.webp',
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-tr from-[#2E3192] to-[#1BFFFF]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 text-center mb-12">
                    Gamified RBAC & AI Integration
                </h2>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {features.map((obj, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="overflow-hidden rounded-full w-32 h-32 mb-4">
                                <img 
                                    src={obj.imgSrc} 
                                    alt={obj.title} 
                                    className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                                {obj.title}
                            </h3>
                            <p className="text-sm text-gray-600 text-center">
                                {obj.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GamifiedRBACAISection;