import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext/AuthContext";

const AddQuestion = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate();
console.log(user)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    category: "Tech",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = formData.tags.split(",").map((tag) => tag.trim());

    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/questions`,
        {
          ...formData,
          tags: tagsArray,
            askedBy: {
          name: user.displayName,  
          email: user.email,
        },
        }
      );
      navigate("/dashboard/my-questions");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Ask a Question</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="input mb-4 w-full"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="textarea mb-4 w-full"
        />
        <input
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma separated)"
          className="input mb-4 w-full"
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="select mb-4 w-full"
        >
          <option>Tech</option>
          <option>Career</option>
        </select>
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
