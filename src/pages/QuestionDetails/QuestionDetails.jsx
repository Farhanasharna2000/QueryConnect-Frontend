import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const QuestionDetails = () => {
  const { id } = useParams(); 
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/questions/${id}`
        );
        setQuestion(res.data);
      } catch (err) {
        console.error("Failed to fetch question details", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!question) return <p className="text-center mt-10">Question not found.</p>;

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/all-questions" className="text-blue-500 underline text-sm mb-4 inline-block">
        ← Back to All Questions
      </Link>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">{question.title}</h2>
        <p className="text-sm text-gray-600 mb-1">
          Asked By: <strong>{question.askedBy?.name || "Unknown"}</strong>
        </p>
        <p className="text-sm text-gray-600 mb-4">
          Date: {new Date(question.createdAt).toLocaleString()}
        </p>

        <p className="mb-4">
          <strong>Category:</strong> {question.category}
        </p>
        <p className="mb-4">
          <strong>Description:</strong> {question.description}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Tags:</strong>{" "}
          {question.tags?.length > 0 ? question.tags.join(", ") : "No tags"}
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default QuestionDetails;
