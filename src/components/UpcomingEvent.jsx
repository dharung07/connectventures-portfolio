// import React, { useState } from 'react';
// import { FiSearch } from 'react-icons/fi';

// const UpcomingEvents = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('');

//   const events = [
//     {
//       name: "Mentorship Program 2024",
//       category: "Career Guidance",
//       description: "An interactive session focused on career growth and mentorship.",
//       date: "2024-10-12T09:00",
//       mode: "Online",
//       link: "https://example.com/mentorship-program",
//       location: "",
//       organizer: "John Doe"
//     },
//     {
//       name: "Alumni Meetup",
//       category: "Networking",
//       description: "A chance to network and connect with alumni from various industries.",
//       date: "2024-11-05T18:00",
//       mode: "Offline",
//       link: "",
//       location: "Coimbatore, India",
//       organizer: "Jane Smith"
//     },
//     {
//       name: "Placement Assistance Webinar",
//       category: "Placement Assistance",
//       description: "Get insights on placement strategies and resume building.",
//       date: "2024-09-30T11:00",
//       mode: "Online",
//       link: "https://example.com/placement-webinar",
//       location: "",
//       organizer: "Emily Johnson"
//     }
//   ];

//   const tags = [
//     "Recent Technology",
//     "Workshop",
//     "Online Webinars",
//     "Offline Events",
//     "Online Events"
//   ];

//   const filteredEvents = events.filter(event =>
//     (filter === '' || event.category.includes(filter) || event.mode.includes(filter)) &&
//     (searchTerm === '' || event.name.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         {/* Section Heading */}
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-12">
//           Upcoming Events
//         </h2>

//         {/* Search and Filter Section */}
//         <div className="flex flex-col md:flex-row justify-between mb-12">
//           {/* Search Box */}
//           <div className="relative w-full md:w-1/4 mb-4 md:mb-0">
//             <input
//               type="text"
//               placeholder="Search events..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>

//           {/* Filter Tags */}
//           <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
//             {tags.map((tag, index) => (
//               <button
//                 key={index}
//                 onClick={() => setFilter(tag)}
//                 className={`px-4 py-2 rounded-full text-sm font-semibold ${
//                   filter === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
//                 } hover:bg-blue-500 hover:text-white transition-colors`}
//               >
//                 {tag}
//               </button>
//             ))}
//             {/* Clear Filter Button */}
//             {filter && (
//               <button
//                 onClick={() => setFilter('')}
//                 className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-colors"
//               >
//                 Clear Filter
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Event Cards */}
//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredEvents.length > 0 ? (
//             filteredEvents.map((event, index) => (
//               <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <div className="p-6">
//                   {/* Event Title */}
//                   <h3 className="text-2xl font-semibold text-gray-800">{event.name}</h3>
                  
//                   {/* Event Category and Date */}
//                   <div className="mt-2 flex justify-between items-center">
//                     <span className="bg-teal-500 text-white text-sm px-3 py-1 rounded-full">{event.category}</span>
//                     <span className="text-gray-600">{new Date(event.date).toLocaleDateString()}</span>
//                   </div>

//                   {/* Event Description */}
//                   <p className="mt-4 text-gray-600">{event.description}</p>

//                   {/* Event Organizer */}
//                   <p className="mt-2 text-gray-500">Organized by: {event.organizer}</p>

//                   {/* Event Location or Link */}
//                   <div className="mt-4">
//                     {event.mode === "Online" ? (
//                       <a
//                         href={event.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
//                       >
//                         Join Online
//                       </a>
//                     ) : (
//                       <p className="text-gray-500">Location: {event.location}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 col-span-full">No events found matching your criteria.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default UpcomingEvents;


import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const UpcomingEvents = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const events = [
    {
      name: "Mentorship Program 2024",
      category: "Career Guidance",
      description: "An interactive session focused on career growth and mentorship.",
      date: "2024-10-12T09:00",
      mode: "Online",
      link: "https://example.com/mentorship-program",
      location: "",
      organizer: "John Doe",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/012/739/427/original/life-coach-for-consultation-education-motivation-mentoring-perspective-and-self-coaching-in-template-hand-drawn-cartoon-flat-illustration-vector.jpg "
    },
    {
      name: "Alumni Meetup",
      category: "Networking",
      description: "A chance to network and connect with alumni from various industries.",
      date: "2024-11-05T18:00",
      mode: "Offline",
      link: "",
      location: "Coimbatore, India",
      organizer: "Jane Smith",
      imageUrl: "https://cdni.iconscout.com/illustration/premium/thumb/event-management-illustration-download-in-svg-png-gif-file-formats--service-entertainment-catering-organize-celebrity-ceremony-pack-people-illustrations-4620528.png?f=webp "
    },
    {
      name: "Online Webinar",
      category: "Placement Assistance",
      description: "Get insights on placement strategies and resume building.",
      date: "2024-09-30T11:00",
      mode: "Online",
      link: "https://example.com/placement-webinar",
      location: "",
      organizer: "Emily Johnson",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7b1cv1bF9EWziw0WbJ0lVHVM5rUlCa5gayA&s"
    },
    {
        name: "Robotics Workshop",
        category: "Technology",
        description: "Hands-on workshop on building simple robots using Arduino and Raspberry Pi. Participants will learn about sensors, actuators, and programming concepts.",
        date: "2024-10-15T10:00",
        mode: "Offline",
        location: "Robotics Lab, Department of Engineering",
        facilitators: "Prof. A.B.C, Prof. X.Y.Z",
        imageUrl: "https://media.istockphoto.com/id/1133276298/vector/robot-creating-young-student-workshop-cyborg-toy.jpg?s=612x612&w=0&k=20&c=ARIQyNoTCKv8-kmuksqeOH8fwgz9A14h67z9M0HiO3g="
      },
      {
        name: "AWS Workshop",
        category: "Technology",
        description: "Introduction to Amazon Web Services (AWS) cloud computing platform. Participants will learn about key AWS services, deployment strategies, and best practices.",
        date: "2024-11-08T09:00",
        mode: "Online",
        location: "Computer Science Lab, Department of IT",
        facilitators: "AWS Certified Solutions Architect",
        imageUrl: "https://tryolabs.com/assets/blog/2018-06-21-getting-started-with-aws-open-source-workshop/2018-06-21-aws-workshop-5b071298b4.png"
      },
      {
        name: "Resume Building Session",
        category: "Career Guidance",
        description: "Workshop on crafting effective resumes for job applications. Participants will learn about resume formats, keywords, and interview preparation tips.",
        date: "2024-12-02T14:00",
        mode: "Online",
        location: "Career Counseling Center",
        facilitators: "Career Counselor",
        imageUrl: "https://academyflorida.com/wp-content/uploads/2019/02/resume-600x338-600x338.jpg"
      }
  ];

  const tags = [
    "Recent Technology",
    "Workshop",
    "Online Webinars",
    "Offline Events",
    "Online Events"
  ];

  const filteredEvents = events.filter(event =>
    (filter === '' || event.category.includes(filter) || event.mode.includes(filter)) &&
    (searchTerm === '' || event.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className="py-16 bg-gradient-to-r from-[#D8B5FF] to-[#1EAE98]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="text-5xl font-extrabold text-gray-800 text-center mb-6">
          Upcoming Events
        </h2>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-between mb-6 items-center">
          {/* Search Box */}
          <div className="relative w-full md:w-1/4 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-400 transition-shadow"
            />
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-semibold shadow-md ${
                  filter === tag ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                } hover:bg-blue-600 hover:text-white transition-colors ease-in-out`}
              >
                {tag}
              </button>
            ))}
            {/* Clear Filter Button */}
            {filter && (
              <button
                onClick={() => setFilter('')}
                className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-semibold hover:bg-red-600 transition-colors ease-in-out"
              >
                Clear Filter
              </button>
            )}
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <div
                key={index}
                className="bg-[#FAF7F0] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Event Image */}
                <div className="relative">
                  <img
                    src={event.imageUrl}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm px-4 py-2">
                    {event.category}
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  {/* Event Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.name}</h3>

                  {/* Event Date and Location */}
                  <div className="mt-1 flex justify-between items-center">
                    <span className="text-gray-500 text-sm">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                    {event.mode === "Offline" && (
                      <span className="text-gray-500 text-sm">{event.location}</span>
                    )}
                  </div>

                  {/* Event Description */}
                  <p className="mt-4 text-gray-700 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Organizer */}
                  <p className="mt-2 text-gray-600 italic">
                    Organized by: {event.organizer}
                  </p>

                  {/* Event Location or Link */}
                  <div className="mt-4">
                    {event.mode === "Online" ? (
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-colors ease-in-out"
                      >
                        Join Online
                      </a>
                    ) : (
                      <p className="text-gray-500">Location: {event.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No events found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

