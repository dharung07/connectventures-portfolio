import React from 'react';

const ChallengesAndSolutionsTable = () => {
  const data = [
    {
      challenge: "Data Privacy",
      solution: [
        "Leverage Blockchain Technology",
        "Conduct Regular Security Audits"
      ]
    },
    {
      challenge: "Scalability",
      solution: [
        "Implement Caching Mechanisms",
        "Optimize Database Queries"
      ]
    },
    {
      challenge: "User Adoption",
      solution: [
        "Offer Gamification Elements",
        "Create a Strong Community"
      ]
    },
    {
      challenge: "Maintenance and Updates",
      solution: [
        "Prioritize User Feedback",
        "Use Version Control Systems"
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9] py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-600 text-center mb-12">
          Challenges and Solutions
        </h2>

        {/* Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-gray-100 rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                <th className="py-4 px-6 text-left text-lg font-semibold tracking-wide rounded-tl-lg">Challenges</th>
                <th className="py-4 px-6 text-left text-lg font-semibold tracking-wide rounded-tr-lg">Solutions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-200 transition-colors duration-300">
                  <td className="py-4 px-6 text-gray-800 font-medium">
                    {item.challenge}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    <ul className="list-disc list-inside space-y-1">
                      {item.solution.map((solution, i) => (
                        <li key={i} className="text-gray-600">{solution}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ChallengesAndSolutionsTable;
