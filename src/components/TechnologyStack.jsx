import React from 'react';
import { FaDatabase, FaNodeJs, FaReact, FaEthereum, FaLock, FaKey } from 'react-icons/fa';
import { SiTailwindcss, SiTensorflow, SiExpress } from 'react-icons/si';

const TechnologyStack = () => {
    const techStack = [
        {
            name: "MongoDB",
            description: "A NoSQL database for flexible and scalable data storage.",
            icon: <FaDatabase className="text-4xl text-green-500 transition-transform duration-300 group-hover:scale-110" />
        },
        {
            name: "Express.js",
            description: "A lightweight, flexible Node.js web application framework.",
            icon: <SiExpress className="text-4xl text-gray-800 transition-transform duration-300 group-hover:scale-110" />
        },
        {
            name: "React",
            description: "A JavaScript library for building user interfaces.",
            icon: <FaReact className="text-4xl text-blue-500 transition-transform duration-300 group-hover:scale-110" />
        },
        {
            name: "Node.js",
            description: "A JavaScript runtime environment for server-side applications.",
            icon: <FaNodeJs className="text-4xl text-green-700 transition-transform duration-300 group-hover:scale-110" />
        },
        {
            name: "Tailwind CSS",
            description: "A utility-first CSS framework for rapid UI development.",
            icon: <SiTailwindcss className="text-4xl text-blue-400 transition-transform duration-300 group-hover:scale-110" />
        },
        {
            name: "TensorFlow",
            description: "An open-source machine learning framework for building and training AI models.",
            icon: <SiTensorflow className="text-4xl text-orange-500 transition-transform duration-300 group-hover:scale-110" />
        },
        {
            name: "Web3.js",
            description: "A JavaScript library for interacting with Ethereum nodes and applications.",
            icon: <FaEthereum className="text-4xl text-purple-500 transition-transform duration-300 group-hover:scale-110" />
        },
        {
            name: "Metamask",
            description: "A digital wallet for interacting with decentralized applications on the Ethereum blockchain.",
            icon: <FaLock className="text-4xl text-yellow-600 transition-transform duration-300 group-hover:scale-110" />
        },
        {
            name: "Authorization (RBAC)",
            description: "Role-Based Access Control (RBAC) for managing user permissions.",
            icon: <FaKey className="text-4xl text-blue-600 transition-transform duration-300 group-hover:scale-110" />
        },
        {
            name: "Authentication (JWT)",
            description: "JSON Web Tokens (JWT) for secure authentication and authorization.",
            icon: <FaKey className="text-4xl text-gray-500 transition-transform duration-300 group-hover:scale-110" />
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-green-400 to-blue-500">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 text-center mb-12">
                    Technology Stack
                </h2>

                {/* Tech Stack List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {techStack.map((tech, index) => (
                        <div key={index} className="group bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center space-x-6">
                                {tech.icon}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                        {tech.name}
                                    </h3>
                                    <p className="text-gray-600 mt-2">{tech.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechnologyStack;
