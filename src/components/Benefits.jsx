import React from 'react';

const Benefits = () => {
    const data = [
        {
            tname: "Institution",
            content: [
                {
                    challenge: "Regional Development",
                    solution: "Encourages local growth through alumni and student connection.",
                },
                {
                    challenge: "Improved Institutional Reputation",
                    solution: "Enhances the institution's image by fostering strong alumni relationships.",
                },
                {
                    challenge: "Industry-Academy Collaborations",
                    solution: "Promotes partnerships between academic institutions and industries for mutual benefits.",
                },
            ],
        },
        {
            tname: "Alumni",
            content: [
                {
                    challenge: "Access to Institute Infrastructure",
                    solution: "Alumni can use campus resources and facilities.",
                },
                {
                    challenge: "Monetization Opportunities",
                    solution: "Alumni can earn through mentorship and collaboration.",
                },
                {
                    challenge: "Stronger Professional Connections",
                    solution: "Expands professional networks by connecting with faculty and students.",
                },
                {
                    challenge: "Talent Acquisition",
                    solution: "A platform to recruit talented students directly.",
                },
            ],
        },
        {
            tname: "Students",
            content: [
                {
                    challenge: "Better Job Opportunities",
                    solution: "Increases job prospects through alumni networking and guidance.",
                },
                {
                    challenge: "Government Opportunities",
                    solution: "Informs students about relevant government programs and jobs.",
                },
                {
                    challenge: "Access to Resources",
                    solution: "Provides students with valuable tools and resources for skill development.",
                },
                {
                    challenge: "Network Growth",
                    solution: "Builds a strong professional network early in their careers.",
                },
            ],
        },

    ];

    return (
        <section id='benefits' className="bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9] py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-600 text-center mb-12">
                    BENEFITS
                </h2>

                {/* Table */}
                <div className="overflow-x-auto rounded-lg">
                    {data.map((item, index) => (
                        <table key={index} className='min-w-full bg-gray-100 rounded-lg mb-6'>
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                                    <th className="px-4 py-3 w-2/5 text-left text-xl font-semibold tracking-wide rounded-tl-lg">{item.tname}</th>
                                    <th className="px-4 py-3 text-left text-xl font-semibold tracking-wide rounded-tr-lg">Benefits</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.content.map((contItem, ind) => (
                                    <tr key={ind} className="border-b hover:bg-gray-200 transition-colors duration-300">
                                        <td className="px-4 py-3 text-left text-lg text-gray-800 font-medium">
                                            {contItem.challenge}
                                        </td>
                                        <td className="px-4 py-3 text-left text-lg text-gray-700">
                                            {contItem.solution}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default Benefits;