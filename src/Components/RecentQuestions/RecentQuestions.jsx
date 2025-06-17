import React from "react";

const questions = [
  {
    id: 1,
    title: "How to center a div using Flexbox?",
    author: "Sarah",
    date: "2025-06-17",
  },
  {
    id: 2,
    title: "Best practices for managing state in React?",
    author: "John",
    date: "2025-06-16",
  },
  {
    id: 3,
    title: "What is the difference between let, const, and var?",
    author: "Ali",
    date: "2025-06-15",
  },
  {
    id: 4,
    title: "How do I deploy a Node.js app to Vercel?",
    author: "Lina",
    date: "2025-06-14",
  },
  {
    id: 5,
    title: "Firebase Auth vs JWT – When to use what?",
    author: "Mehedi",
    date: "2025-06-13",
  },
  {
    id: 6,
    title: "How to create a responsive grid with Tailwind CSS?",
    author: "Fatima",
    date: "2025-06-12",
  },
];

const RecentQuestions = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Recent <span className="text-blue-600">Questions</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
          {questions.map((q) => (
            <div
              key={q.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {q.title}
              </h3>
              <p className="text-sm text-gray-600">
                Asked by <span className="font-medium">{q.author}</span> on{" "}
                {new Date(q.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentQuestions;
