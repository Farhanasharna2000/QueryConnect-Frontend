import React from "react";
import { FaUsers, FaLightbulb, FaMedal } from "react-icons/fa";

const benefits = [
  {
    icon: <FaUsers className="text-[#7C3AED] md:size-10 size-7" />,
    title: "Community-Powered",
    description: "Join a growing community where knowledge is shared and celebrated.",
  },
  {
    icon: <FaLightbulb className="text-[#F59E0B] md:size-10 size-7" />,
    title: "Get Inspired",
    description: "Ask real questions and discover answers from people who’ve been there.",
  },
  {
    icon: <FaMedal className="text-green-600 md:size-10 size-7" />,
    title: "Earn Recognition",
    description: "Contribute answers and earn reputation as a trusted expert.",
  },
];

const Benefit = () => {
  return (
    <section className="md:pt-20 pt-10 px-5 md:px-0 container mx-auto">
      <div className=" text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-10">
          Why <span className="text-[#7C3AED]">Join Us</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-6  bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
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
