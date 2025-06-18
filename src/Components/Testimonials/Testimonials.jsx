import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah A.",
    role: "Frontend Developer",
    quote:
      "QueryConnect has been an incredible resource for getting help fast. The community is super helpful and knowledgeable!",
  },
  {
    name: "Mohammad R.",
    role: "Computer Science Student",
    quote:
      "Whenever I'm stuck on a coding problem, QueryConnect is my go-to. It's better than searching forums blindly.",
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
    <section className=" md:py-20 py-10 px-5 md:px-0 container mx-auto ">
      <div className=" text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-10">
          What Our <span className="text-[#7C3AED]">Users Say</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left flex flex-col justify-between h-full"
            >
              <div>
                <FaQuoteLeft className="text-[#7C3AED] flex items-center text-xl md:text-3xl mb-4" />
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              </div>
              <div className="">
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
