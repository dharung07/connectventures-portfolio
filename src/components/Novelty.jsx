import React from 'react';

const Novelty = () => {
    const features = [
        {
            title: "Session-based Chat with Alumni",
            description: "Implementing session-based chats ensures privacy by creating temporary communication sessions between students and alumni, minimizing data exposure and fostering secure conversations",
            imgSrc: 'https://pics.craiyon.com/2024-09-17/C4QmIK5zSN-f88b4iQzZiQ.webp',
        },
        {
            title: "Alumni Micro Groups",
            description: "Small, focused groups allow alumni to share relevant events, job opportunities, and workshops, creating niche communities that enhance networking and professional growth",
            imgSrc: 'https://pics.craiyon.com/2024-09-24/BZvmU8U6REGa5aolRy_67Q.webp',
        },
        {
            title: "Rewards for Active Alumni",
            description: "Introducing a reward system incentivizes alumni engagement, offering recognition and perks for continuous participation, which strengthens the platform's active user base",
            imgSrc: 'https://pics.craiyon.com/2024-09-17/vRseUzChTBys4BAqT01TKw.webp',
        },
        {
            title: "Content Posts for Insights",
            description: "User-generated content posts allow the platform to gather feedback and insights, driving continuous improvement and feature enhancement based on real-time user interaction",
            imgSrc: 'https://pics.craiyon.com/2024-09-06/LmyYdCqIQ3q7X6UCSNSAng.webp',
        }
    ];

    return (
        <section id='novelty' className="py-16 md:py-24 bg-gradient-to-tr from-[#2E3192] to-[#1BFFFF]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 text-center mb-12">
                    Novelty
                </h2>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                                {obj.title}
                            </h3>
                            <p className="text-lg text-gray-600 text-center">
                                {obj.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Novelty;