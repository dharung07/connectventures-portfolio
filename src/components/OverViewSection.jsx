import React from 'react';

const OverviewSection = () => {
    const objectives = [
        {
            title: 'Fostering Connections',
            description: 'Connecting students, alumni, and faculty for enhanced networking and collaboration.',
            imgSrc: 'https://pics.craiyon.com/2024-09-10/mncfqKYlQkylhyy_C8S-3g.webp', // Replace with your image path
        },
        {
            title: 'Mentorship and Career Guidance',
            description: 'Providing valuable insights and guidance for students’ career paths.',
            imgSrc: 'https://pics.craiyon.com/2024-09-15/4K9QUwfCQ5mVTwzNt0uo9Q.webp', // Replace with your image path
        },
        {
            title: 'Data Security with Blockchain',
            description: 'Ensuring user data privacy and security through blockchain technology.',
            imgSrc: 'https://pics.craiyon.com/2024-09-12/NRF7t5jDQa2XpaBV1vX2iw.webp', // Replace with your image path
        },
    ];

    return (
        <section id='overview'>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 py-20">
                {/* Container for Overview Content */}
                <div className="max-w-6xl mx-auto text-center px-4 md:px-8 lg:px-12">
                    {/* Section Heading */}
                    <h2 className="text-gray-700 text-4xl md:text-5xl font-extrabold mb-8">
                        Project Overview
                    </h2>
                    {/* Overview Text */}
                    <p className="text-white text-lg md:text-2xl font-light mb-12">
                        The Student-Alumni Connecting Portal is an advanced platform designed to foster meaningful connections between students, alumni, faculty, and institution administrators.
                        It creates a holistic ecosystem for mentorship, career guidance, academic support, and networking.
                    </p>
                    {/* Objectives Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {objectives.map((obj, index) => (
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
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {obj.title}
                                </h3>
                                <p className="text-gray-600 text-center">
                                    {obj.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
