import React from "react";
import { FaUsers, FaLightbulb, FaMedal } from "react-icons/fa";

const benefits = [
  {
    icon: <FaUsers className="text-blue-600 w-8 h-8" />,
    title: "Community-Powered",
    description: "Join a growing community where knowledge is shared and celebrated.",
  },
  {
    icon: <FaLightbulb className="text-yellow-500 w-8 h-8" />,
    title: "Get Inspired",
    description: "Ask real questions and discover answers from people who’ve been there.",
  },
  {
    icon: <FaMedal className="text-green-600 w-8 h-8" />,
    title: "Earn Recognition",
    description: "Contribute answers and earn reputation as a trusted expert.",
  },
];

const Benefit = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why <span className="text-blue-600">Join Us</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
