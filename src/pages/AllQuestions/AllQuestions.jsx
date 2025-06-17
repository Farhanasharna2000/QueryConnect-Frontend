import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const AllQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/questions`);
        setQuestions(res.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) return <p className="text-center py-8">Loading questions...</p>;

  return (
    <>
    <Navbar/>
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">All Questions</h2>
      {questions.length === 0 ? (
        <p>No questions found.</p>
      ) : (
        <div className="grid gap-4">
          {questions.map((q) => (
            <div
              key={q._id}
              className="bg-white rounded-lg shadow p-5 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{q.title}</h3>

              <div className="mb-2">
                {q.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-100 text-blue-600 text-sm px-2 py-0.5 rounded mr-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-500 mb-1">
                <strong>Date:</strong> {new Date(q.createdAt).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <strong>Asked By:</strong> {q.askedBy?.name || "Unknown"}
              </p>

              <p className="text-gray-700 mb-4">
                {q.description.length > 80
                  ? q.description.slice(0, 80) + "..."
                  : q.description}
              </p>

              <Link
                to={`/question/${q._id}`}
                className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
              >
                🔘 Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default AllQuestions;
