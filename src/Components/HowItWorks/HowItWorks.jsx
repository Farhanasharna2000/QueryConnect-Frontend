import React from "react";
import { FaSignInAlt, FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaSignInAlt className="w-10 h-10 text-blue-600" />,
    title: "Login",
    description: "Sign up or log in to your AskZone account to get started.",
  },
  {
    icon: <FaQuestionCircle className="w-10 h-10 text-blue-600" />,
    title: "Ask",
    description: "Post your questions to the community in seconds.",
  },
  {
    icon: <FaCheckCircle className="w-10 h-10 text-blue-600" />,
    title: "Get Answer",
    description: "Receive helpful answers and solutions from other users.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          How <span className="text-blue-600">It Works</span>
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
