import React from "react";

const About = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-blue-600">QueryConnect</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          QueryConnect is a community-driven Q&A platform where users can ask questions,
          share knowledge, and learn from one another. Whether you're a curious
          learner or an experienced professional, QueryConnect provides a space to
          engage, contribute, and grow. Sign up to ask your questions, explore
          answers from others, and become a part of a growing knowledge hub.
        </p>
      </div>
    </section>
  );
};

export default About;
