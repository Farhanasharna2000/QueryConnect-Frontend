import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah A.",
    role: "Frontend Developer",
    quote:
      "AskZone has been an incredible resource for getting help fast. The community is super helpful and knowledgeable!",
  },
  {
    name: "Mohammad R.",
    role: "Computer Science Student",
    quote:
      "Whenever I'm stuck on a coding problem, AskZone is my go-to. It's better than searching forums blindly.",
  },
  {
    name: "Lina K.",
    role: "Tech Enthusiast",
    quote:
      "I love contributing answers. It feels great to help others and earn recognition along the way!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our <span className="text-blue-600">Users Say</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left"
            >
              <FaQuoteLeft className="text-blue-500 text-2xl mb-4" />
              <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              <div>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
