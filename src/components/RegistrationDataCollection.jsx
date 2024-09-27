// import React from 'react';

// const RegistrationDataCollection = () => {
//   const roles = [
//     {
//       title: "Students",
//       description: "Provide academic status, career goals, skills, contact details, and LinkedIn profiles.",
//     },
//     {
//       title: "Alumni & Star Alumni",
//       description: "Share professional information, milestones, mentorship availability, and achievements.",
//     },
//     {
//       title: "Faculty",
//       description: "Submit research interests, courses taught, and mentorship details.",
//     },
//     {
//       title: "Administrators",
//       description: "Manage user credentials, roles, and oversee data integrity.",
//     }
//   ];

//   const dataStrategies = [
//     {
//       title: "LinkedIn Scraping",
//       description: "The platform uses LinkedIn scraping to auto-fill user profiles by extracting work experience, education, and skills."
//     },
//     {
//       title: "Batch Creation",
//       description: "Administrators can batch-create alumni profiles using .XLS or .XLSX files for efficient onboarding."
//     }
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-r from-[#2E3192] to-[#1BFFFF]">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         {/* Section Heading */}
//         <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
//           Registration & Data Collection
//         </h2>

//         {/* Role-Based Registration Process */}
//         <div className="mb-12">
//           <h3 className="text-2xl font-bold text-gray-200 mb-6">Role-Based Registration</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {roles.map((role, index) => (
//               <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//                 <h4 className="text-xl font-semibold text-gray-800 mb-4">{role.title}</h4>
//                 <p className="text-gray-600">{role.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Data Collection Strategies */}
//         <div>
//           <h3 className="text-2xl font-bold text-gray-200 mb-6">Data Collection Strategies</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {dataStrategies.map((strategy, index) => (
//               <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//                 <h4 className="text-xl font-semibold text-[#FF5F6D] mb-4">{strategy.title}</h4>
//                 <p className="text-gray-600">{strategy.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegistrationDataCollection;

import React from 'react';
import { FaUserGraduate, FaBriefcase, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa'; // Icons for each role

const RegistrationDataCollection = () => {
    const roles = [
        {
            title: "Students",
            description: "Provide academic status, career goals, skills, contact details, and LinkedIn profiles.",
            icon: <FaUserGraduate className="text-4xl text-[#2E3192] mb-4" />, // Student icon
        },
        {
            title: "Alumni & Star Alumni",
            description: "Share professional information, milestones, mentorship availability, and achievements.",
            icon: <FaBriefcase className="text-4xl text-[#2E3192] mb-4" />, // Alumni icon
        },
        {
            title: "Faculty",
            description: "Submit research interests, courses taught, and mentorship details.",
            icon: <FaChalkboardTeacher className="text-4xl text-[#2E3192] mb-4" />, // Faculty icon
        },
        {
            title: "Administrators",
            description: "Manage user credentials, roles, and oversee data integrity.",
            icon: <FaUserShield className="text-4xl text-[#2E3192] mb-4" />, // Admin icon
        }
    ];

    const dataStrategies = [
        {
            title: "LinkedIn Scraping",
            description: "The platform uses LinkedIn scraping to auto-fill user profiles by extracting work experience, education, and skills."
        },
        {
            title: "Batch Creation",
            description: "Administrators can batch-create alumni profiles using .XLS or .XLSX files for efficient onboarding."
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-tr from-[#2E3192] to-[#1BFFFF]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Heading */}
                <h2 className="text-4xl font-extrabold text-gray-700 text-center mb-12">
                    Registration & Data Collection
                </h2>

                {/* Role-Based Registration Process */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-200 mb-6">Role-Based Registration</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {roles.map((role, index) => (
                            <div key={index} className="group bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center space-x-4">
                                    {role.icon}
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{role.title}</h3>
                                        <p className="text-gray-600 mt-2">{role.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Collection Strategies */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-200 mb-6">Data Collection Strategies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {dataStrategies.map((strategy, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                                <h4 className="text-xl font-semibold text-[#FF5F6D] mb-4">{strategy.title}</h4>
                                <p className="text-gray-600">{strategy.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationDataCollection;
