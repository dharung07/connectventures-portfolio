import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';
import { FiThumbsUp, FiMessageCircle } from 'react-icons/fi';


const Landing = () => {
    const recommendedProfiles = [
        { name: 'Jaden', position: 'Software Engineer', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTet_Emrqetmp-yCnraibldYIZpEgXFxs7qUQ&s' },
        { name: 'Jancy', position: 'Data Scientist', imageUrl: 'https://i2.wp.com/www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg ' },
        { name: 'Sam Wilson', position: 'Full Stack Developer', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTet_Emrqetmp-yCnraibldYIZpEgXFxs7qUQ&s ' },
        { name: 'Kumar', position: 'Software Engineer', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTet_Emrqetmp-yCnraibldYIZpEgXFxs7qUQ&s ' },
        { name: 'Jan', position: 'Data Scientist', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTet_Emrqetmp-yCnraibldYIZpEgXFxs7qUQ&s ' },
        { name: 'Sam Wilson', position: 'Full Stack Developer', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTet_Emrqetmp-yCnraibldYIZpEgXFxs7qUQ&s ' },
       
        
    ];

    const posts = [
        {
            author: 'John Doe',
            content: 'Excited to share my recent project on AI!',
            timestamp: '2 hours ago',
        },
    ];

    const jobs = [
        {
            company: 'TechCorp',
            position: 'Backend Developer',
            location: 'Remote',
        },
        {
            company: 'DataX',
            position: 'Full Stack Intern',
            location: 'Chennai',
        },
        {
            company: 'Accenture',
            position: 'Data Analyst',
            location: 'Remote',
        },
        {
            company: 'Wipro',
            position: 'Junior Recruiter',
            location: 'Banglore',
        },
        {
            company: 'Hexaware',
            position: 'Data Analyst',
            location: 'Remote',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 h-full">
            {/* Appbar */}

            <nav className="bg-[#001F3F] shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-8">
                        <h1 className="text-2xl font-bold text-blue-300">ConnectVentures</h1>
                        <ul className="hidden md:flex space-x-6">
                            <li className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">Events</li>
                            <li className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">Chat Arena</li>
                            <li className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">Job/Internship</li>
                            <li className="hover:text-gray-200 cursor-pointer font-medium text-gray-300">Announcement</li>
                        </ul>
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            className="hidden md:block px-3 py-1 bg-gray-100 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search..."
                        />
                        <FiSearch className="h-8 w-8 text-gray-600 cursor-pointer md:hidden" />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCMy4ympEgWs3pxYmNXhg5Fu4hxDUqpsYTw&s"
                            alt="avatar"
                            className="w-8 h-8 rounded-full"
                        />
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-1">
                {/* Section 1: Recommended Profiles */}
                <div className="col-span-1 bg-white py-4 px-3 overflow-y-auto shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">People You May Know</h2>
                    <ul className="space-y-4">
                        {recommendedProfiles.map((profile, index) => (

                            <li key={index} className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center space-x-4">
                                    <img src={profile.imageUrl} alt={`${profile.name}'s profile`} className="h-12 w-12 rounded-full" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{profile.name}</h3>
                                        <p className="text-sm text-gray-500">{profile.position}</p>
                                    </div>
                                </div>
                                <img src="https://i3.wp.com/static.vecteezy.com/system/resources/previews/006/758/316/original/chain-link-icon-free-vector.jpg?ssl=1" alt="Chain Link Icon" className="h-7 w-7 rounded-full border-blue-500" />
                            </li>

                        ))}
                    </ul>
                </div>

                {/* Section 2: Posts */}
                <div className="col-span-2 bg-gray-300 shadow-sm overflow-y-auto p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Posts</h2>
                    <ul className="space-y-6">
                        {posts.map((post, index) => (

                            <li key={index} className="bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-gray-900">{post.author}</h3>
                                    <p className="text-xs text-gray-400">{post.timestamp}</p>
                                </div>
                                <p className="mt-2 text-gray-700">{post.content}</p>
                                <img src="https://www.shutterstock.com/image-vector/analysis-data-obtained-ai-people-600nw-2467688413.jpg " alt="Chain Link Icon" className="h-90 w-180 border-blue-500" />

                                {post.image && <img src={post.image} alt="Post visual" className="mt-4 rounded-lg" />}
                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center">
                                            <FiThumbsUp className="text-gray-500 h-5 w-5 cursor-pointer hover:text-blue-500" />
                                            <span className="ml-1 text-gray-600">{post.likes}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <FiMessageCircle className="text-gray-500 h-5 w-5 cursor-pointer hover:text-blue-500" />
                                            <span className="ml-1 text-gray-600">{post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Section 3: Job/Internship Openings */}
                <div className="col-span-1 bg-white shadow-sm overflow-y-auto p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Jobs & Internships</h2>
                    <ul className="space-y-4">
                        {jobs.map((job, index) => (
                            <li key={index} className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-gray-900">{job.position}</h3>
                                    <p className="text-sm text-gray-500">{job.company}</p>
                                    <p className="text-xs text-gray-400">{job.location}</p>
                                </div>
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/new-version-of-star-selected-icon/view-more.png " alt="Chain Link Icon" className="h-7 w-7 rounded-full border-blue-500" />
                            </li>

                            //     <li key={index} className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            //     <div className="flex items-center space-x-4">
                            //         <img src={profile.imageUrl} alt={`${profile.name}'s profile`} className="h-12 w-12 rounded-full" />
                            //         <div>
                            //             <h3 className="font-semibold text-gray-900">{profile.name}</h3>
                            //             <p className="text-sm text-gray-500">{profile.position}</p>
                            //         </div>
                            //     </div>
                            //     <img src="https://i3.wp.com/static.vecteezy.com/system/resources/previews/006/758/316/original/chain-link-icon-free-vector.jpg?ssl=1" alt="Chain Link Icon" className="h-7 w-7 rounded-full border-blue-500" />
                            // </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Landing;
