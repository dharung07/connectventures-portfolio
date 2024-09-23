import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#09203F] to-[#537895] py-6">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                {/* Thank You Message */}
                <p className="bg-gradient-to-r from-[#6FD6FF] to-[#BFF098] bg-clip-text text-transparent text-2xl md:text-4xl font-bold mb-2">
                Thank you for watching!
                </p>

                {/* Team Name */}
                <p className="text-lg md:text-xl text-gray-200 font-semibold">
                    #Team<span className="text-white">ConnectVentures</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
