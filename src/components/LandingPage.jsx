// import React from 'react';

// const HeroSection = () => {
//   return (
//     <>
//       <nav className="bg-[#001F3F] shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="flex items-center space-x-8">
//             <ul className="hidden md:flex space-x-6">
//               <li className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">Home</li>
//               <li className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">Key Features</li>
//               <li className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">Novelty</li>
//               <li className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">Technology Stack</li>
//               <li className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">Benefits</li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div
//         className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center"
//         style={{
//           backgroundImage: `url('https://boroktimes.com/storage/2023/02/iStock-474306176.jpeg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           opacity: 0.9,
//         }}
//       >

//         {/* Container for Hero Content */}
//         <div className="text-center p-10 md:px-8 lg:px-12 bg-opacity-90 bg-black rounded-3xl">
//           {/* Title */}
//           <h1 className="bg-gradient-to-tr from-[#2E3192] to-[#1BFFFF] bg-clip-text text-transparent text-lg md:text-2xl font-bold mb-4">
//             Welcome to the solution portfolio of #TeamConnectVentures
//           </h1>
//           <h1 className="bg-gradient-to-r from-[#3b3bdd] to-purple-600 bg-clip-text text-transparent text-4xl md:text-6xl font-bold mb-8">
//             Student-Alumni Connecting Portal
//           </h1>

//           {/* Subtitle */}
//           <p className="text-white text-lg md:text-2xl font-light mb-6">
//             An Intelligent Platform Connecting Alumni, Students, and Faculty for Mentorship and Collaboration
//           </p>
//           {/* Call to Action */}
//           <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
//             <a
//               href="#overview"
//               className="bg-gray-200 text-[#000080] w-full md:w-auto px-6 py-2 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
//             >
//               Explore the Solution
//             </a>
//             <a
//               href="https://drive.google.com/drive/folders/1i9t58CDpzznwaBM7PihydlfUCPFqdqdd"
//               target='blank'
//               className="bg-gray-200 text-[#000080] w-full md:w-auto px-6 py-2 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
//             >
//               View Screenshots Of The Portal
//             </a>
//           </div>


//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the menu

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  return (
    <section id='home'>
      <nav className="bg-[#264466] shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
          {/* Logo or Branding */}
          <div className="text-white text-xl font-bold">#TeamConnectVentures</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#keyfeatures" className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">
                  Key Features
                </a>
              </li>
              <li>
                <a href="#novelty" className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">
                  Novelty
                </a>
              </li>
              <li>
                <a href="#snaps" className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">
                  Snaps
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">
                  Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#001F3F] py-4">
            <ul className="flex flex-col items-center space-y-4">
              <li>
                <a
                  href="#home"
                  className="hover:text-gray-200 cursor-pointer font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#keyfeatures"
                  className="hover:text-gray-200 cursor-pointer font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Key Features
                </a>
              </li>
              <li>
                <a
                  href="#novelty"
                  className="hover:text-gray-200 cursor-pointer font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Novelty
                </a>
              </li>
              <li>
                <a
                  href="#technology-stack"
                  className="hover:text-gray-200 cursor-pointer font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Technology Stack
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-gray-200 cursor-pointer font-medium text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Benefits
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div
        className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('https://boroktimes.com/storage/2023/02/iStock-474306176.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9,
        }}
      >
        {/* Container for Hero Content */}
        <div className="text-center p-10 md:px-8 lg:px-12 bg-opacity-90 bg-black rounded-3xl">
          {/* Title */}
          <h1 className="bg-gradient-to-tr from-[#2E3192] to-[#1BFFFF] bg-clip-text text-transparent text-lg md:text-xl font-bold">
            Welcome to the solution portfolio of #TeamConnectVentures
          </h1>
          <h1 className="bg-gradient-to-r from-[#3b3bdd] to-purple-600 bg-clip-text text-transparent text-4xl md:text-6xl font-bold mb-8">
            Student-Alumni Connecting Portal
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg md:text-xl font-bold mb-10">
            An Intelligent Platform Connecting Alumni, Students, and Faculty for Mentorship and Collaboration
          </p>
          {/* Call to Action */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <a
              href="#overview"
              className="bg-gray-200 text-[#000080] w-full md:w-auto px-6 py-2 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
            >
              Explore the Solution
            </a>
            <a
              href="#snaps"
              rel="noopener noreferrer"
              className="bg-gray-200 text-[#000080] w-full md:w-auto px-6 py-2 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
            >
              View Screenshots Of The Portal
            </a>
            <a
              href="https://youtu.be/3aUhNsDomR8"
              target='blank'
              rel="noopener noreferrer"
              className="bg-gray-200 text-[#000080] w-full md:w-auto px-6 py-2 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
