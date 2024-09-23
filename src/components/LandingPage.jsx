// import React from 'react';

// const HeroSection = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center">
//       {/* Container for Hero Content */}
//       <div className="text-center px-4 md:px-8 lg:px-12">
//         {/* Title */}
//         <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
//           Student-Alumni Connecting Portal
//         </h1>
//         {/* Subtitle */}
//         <p className="text-white text-lg md:text-2xl font-light mb-6">
//           An Intelligent Platform Connecting Alumni, Students, and Faculty for Mentorship and Collaboration
//         </p>
//         {/* Call to Action */}
//         <div>
//           <a
//             href="#overview"
//             className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
//           >
//             Explore the Solution
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from 'react';

const HeroSection = () => {
  return (
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
        <h1 className="bg-gradient-to-r from-[#3b3bdd] to-purple-600 bg-clip-text text-transparent text-4xl md:text-6xl font-bold mb-4">
          Student-Alumni Connecting Portal
        </h1>

        {/* Subtitle */}
        <p className="text-white text-lg md:text-2xl font-light mb-6">
          An Intelligent Platform Connecting Alumni, Students, and Faculty for Mentorship and Collaboration
        </p>
        {/* Call to Action */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
          <a
            href="#overview"
            className="bg-gray-200 text-[#000080] w-full md:w-auto px-6 py-2 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
          >
            Explore the Solution
          </a>
          <a
            href="#overview"
            className="bg-gray-200 text-[#000080] w-full md:w-auto px-6 py-2 rounded-lg text-lg md:text-xl font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
          >
            Visit the Website
          </a>
        </div>


      </div>
    </div>
  );
};

export default HeroSection;
