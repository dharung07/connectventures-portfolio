
import React, { useState } from 'react';
import { FaArrowRight, FaCommentDots, FaUserFriends, FaRobot, FaPaperclip, FaGraduationCap } from 'react-icons/fa';

const Community = () => {
  // Sample chat rooms
  const chatRooms = [
    '#GoogleClub',
    '#FullStackDevs',
    '#AIEnthusiasts',
    '#WebDevCommunity',
    '#DataScienceTalks',
    '#MobileDev',
    '#GameDev',
    '#BlockchainBuilders',
    '#CybersecurityHacks',
    '#OpenSourceContributors',
  ];

  const customScrollbar = {
    scrollbarWidth: 'thin',
    scrollbarColor: '#a0aec0 #edf2f7',
  };

  const customScrollbarWebkit = {
    WebkitScrollbar: {
      width: '8px',
      height: '8px',
    },
    WebkitScrollbarThumb: {
      backgroundColor: '#a0aec0',
      borderRadius: '10px',
    },
    WebkitScrollbarThumbHover: {
      backgroundColor: '#4a5568',
    },
    WebkitScrollbarTrack: {
      background: '#edf2f7',
      borderRadius: '10px',
    },
  };

  // State to handle selected category and chat room
  const [selectedCategory, setSelectedCategory] = useState('Discussion Forum');
  const [selectedChatRoom, setSelectedChatRoom] = useState('#FullStackDevs');

  return (
    <section className="h-screen max-w-screen flex bg-gray-100">
      {/* Sidebar - Categories */}
      <div className="w-1/6 bg-[#001F3F] shadow-lg border-r border-gray-300 overflow-y-auto custom-scrollbar">
        <div className="py-6 px-3">
          <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
          <ul className="space-y-4">
            <li
              className={`cursor-pointer p-3 flex items-center space-x-2 text-gray-800 font-semibold rounded-lg transition hover:bg-blue-200 ${
                selectedCategory === 'Discussion Forum' ? 'bg-blue-100' : ''
              }`}
              onClick={() => setSelectedCategory('Discussion Forum')}
            >
              <FaCommentDots className="text-blue-500" />
              <span>Discussion Forum</span>
            </li>
            <li
              className={`cursor-pointer p-3 flex items-center space-x-2 text-gray-200 font-semibold rounded-lg transition hover:bg-blue-200 ${
                selectedCategory === 'Alumni Chat' ? 'bg-blue-100' : ''
              }`}
              onClick={() => setSelectedCategory('Alumni Chat')}
            >
              <FaUserFriends className="text-green-500" />
              <span>Alumni Chat</span>
            </li>
            <li
              className={`cursor-pointer p-3 flex items-center space-x-2 text-gray-200 font-semibold rounded-lg transition hover:bg-blue-200 ${
                selectedCategory === 'AI Chatbot' ? 'bg-blue-100' : ''
              }`}
              onClick={() => setSelectedCategory('AI Chatbot')}
            >
              <FaGraduationCap className="text-purple-500" />
              <span>Chat with your Mentor</span>
            </li>
            <li
              className={`cursor-pointer p-3 flex items-center space-x-2 text-gray-200 font-semibold rounded-lg transition hover:bg-blue-200 ${
                selectedCategory === 'AI Chatbot' ? 'bg-blue-100' : ''
              }`}
              onClick={() => setSelectedCategory('AI Chatbot')}
            >
              <FaRobot className="text-yellow-500" />
              <span>AI Chatbot</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Chat Room List */}
      <div
        className="w-2/6 bg-gray-200 shadow-lg border-r border-gray-300 p-6 overflow-y-auto custom-scrollbar"
        style={{ ...customScrollbar, ...customScrollbarWebkit }}
      >
        <h2 className="text-xl font-bold text-blue-900 mb-6">Discussion Forum</h2>
        <ul className="space-y-4">
          {chatRooms.map((room, index) => (
            <li
              key={index}
              className={`p-4 bg-white hover:bg-blue-100 shadow-md rounded-lg cursor-pointer transition flex justify-between items-center ${
                selectedChatRoom === room ? 'bg-blue-100' : ''
              }`}
              onClick={() => setSelectedChatRoom(room)}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{room}</h3>
                <p className="text-sm text-gray-500 truncate">Join the conversation!</p>
              </div>
              <FaArrowRight className="text-blue-500" />
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Arena */}
      <div className="w-3/6 bg-[#4c6f91] py-6 px-4  flex flex-col">
        <h2 className="text-xl font-bold text-white mb-6">Chat Arena</h2>

        {/* Chat Area (Messages) */}
        <div className="flex-grow overflow-y-auto bg-gray-200 p-4 shadow-inner rounded-lg space-y-4 custom-scrollbar">
          {/* Sample messages */}
          <div className="mb-4 flex items-start space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GwkViOEunBePpydMn-mpr6mEIaK5MU-7w&s"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-blue-900">John Doe</span>
                <span className="text-xs text-gray-700">12:34 PM</span>
              </div>
              <div className="text-black bg-transparent">
              Full stack development is amazing!
              </div>
            </div>
          </div>

          <div className="mb-4 flex items-start justify-end space-x-4">
            <div>
              <div className="flex items-center justify-end space-x-2">
                <span className="text-sm font-semibold text-blue-900">Jane Smith</span>
                <span className="text-xs text-gray-700">Today at 12:35 PM</span>
              </div>
              <div className="text-black bg-transparent">
              Yeah, it’s cool! Knowing both sides really makes you versatile.
              </div>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCMy4ympEgWs3pxYmNXhg5Fu4hxDUqpsYTw&s"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>

          <div className="mb-4 flex items-start space-x-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GwkViOEunBePpydMn-mpr6mEIaK5MU-7w&s"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-blue-900">John Doe</span>
                <span className="text-xs text-gray-700">Today at 12:36 PM</span>
              </div>
              <div className="text-black bg-transparent">
              Exactly. The front-end is all about user experience, right?
              </div>
            </div>
            </div>
                  
                  <div className="mb-4 flex items-start justify-end space-x-4">
            <div>
              <div className="flex items-center justify-end space-x-2">
                <span className="text-sm font-semibold text-blue-900">Jane Smith</span>
                <span className="text-xs text-gray-700">Today at 12:35 PM</span>
              </div>
              <div className="text-black bg-transparent">
              Yep! HTML, CSS, and JavaScript are essential for that.
              </div>
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCMy4ympEgWs3pxYmNXhg5Fu4hxDUqpsYTw&s"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          
        </div>
        

        {/* Message Input */}
        <div className="mt-3 flex items-center bg-gray-700 p-3 rounded-lg">
          <input
            type="text"
            className="flex-grow px-4 py-2 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
                  />
            <button className="ml-4 bg-blue-500 text-white px-3 py-3 rounded-full hover:bg-blue-600 transition">
            <FaPaperclip />
          </button>
          <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;