import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.config";

export default function Register() {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name || !email || !password || !photoURL) {
      return setErrorMsg("All fields are required.");
    }

    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, {
        displayName: name,
        photoURL: photoURL,
      });
      navigate("/dashboard");
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      {errorMsg && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm text-center">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="border p-2 w-full mb-4 rounded"
        />
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Profile Photo URL"
          className="border p-2 w-full mb-4 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="border p-2 w-full mb-4 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2 w-full mb-4 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 w-full rounded"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Register"}
        </button>
      </form>
    </div>
  );
}
