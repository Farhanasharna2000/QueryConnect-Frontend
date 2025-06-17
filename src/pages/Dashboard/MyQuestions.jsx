import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../AuthContext/AuthContext";

const MyQuestions = () => {
  const { user } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
  });

  useEffect(() => {
    const fetchMyQuestions = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/questions/my-questions`,
          {
            params: { email: user.email },
          }
        );
        setQuestions(res.data);
      } catch (err) {
        console.error("Error fetching your questions:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchMyQuestions();
  }, [user?.email]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/api/questions/${id}`
      );
      setQuestions((prev) => prev.filter((q) => q._id !== id));
    } catch (err) {
      console.error("Error deleting question:", err);
    }
  };

  const startEditing = (q) => {
    setEditingId(q._id);
    setEditFormData({
      title: q.title,
      description: q.description,
      category: q.category,
      tags: q.tags?.join(", ") || "",
    });
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const updatedData = {
        ...editFormData,
        tags: editFormData.tags.split(",").map((tag) => tag.trim()),
      };

      const res = await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/api/questions/${editingId}`,
        updatedData
      );

      setQuestions((prev) =>
        prev.map((q) => (q._id === editingId ? res.data : q))
      );
      setEditingId(null);
    } catch (err) {
      console.error("Error updating question:", err);
    }
  };

  if (loading) return <p className="text-center">Loading your questions...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">My Questions</h2>
      {questions.length === 0 ? (
        <p>You haven't asked any questions yet.</p>
      ) : (
        questions.map((q) => (
          <div key={q._id} className="bg-white p-4 mb-4 rounded shadow">
            {editingId === q._id ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={editFormData.title}
                  onChange={handleEditChange}
                  className="block w-full mb-2 border rounded px-2 py-1"
                  placeholder="Title"
                />
                <textarea
                  name="description"
                  value={editFormData.description}
                  onChange={handleEditChange}
                  className="block w-full mb-2 border rounded px-2 py-1"
                  placeholder="Description"
                />
                <select
                  name="category"
                  value={editFormData.category}
                  onChange={handleEditChange}
                  className="block w-full mb-2 border rounded px-2 py-1"
                >
                  <option value="Tech">Tech</option>
                  <option value="Career">Career</option>
                </select>

                <input
                  type="text"
                  name="tags"
                  value={editFormData.tags}
                  onChange={handleEditChange}
                  className="block w-full mb-2 border rounded px-2 py-1"
                  placeholder="Tags (comma separated)"
                />
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">{q.title}</h3>
                <p className="mb-1">{q.description}</p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Category:</strong> {q.category}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  <strong>Tags:</strong>{" "}
                  {q.tags && q.tags.length > 0 ? q.tags.join(", ") : "None"}
                </p>
                <p>
                  <strong>Asked By:</strong> {q.askedBy?.name || "Unknown"}
                </p>
                <p className="text-sm text-gray-400 mb-2">
                  <strong>Asked:</strong>{" "}
                  {new Date(q.createdAt).toLocaleString()}
                </p>
                <button
                  onClick={() => handleDelete(q._id)}
                  className="text-red-500 mt-2 mr-3"
                >
                  Delete
                </button>
                <button
                  onClick={() => startEditing(q)}
                  className="text-blue-500 mt-2"
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MyQuestions;
