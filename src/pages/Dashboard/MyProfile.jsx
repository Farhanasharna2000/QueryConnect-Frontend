import { useAuth } from "../../AuthContext/AuthContext";

const MyProfile = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      <img src={user.photoURL} alt="Profile" className="w-24 rounded-full mb-4" />
      <p><strong>Name:</strong> {user.displayName}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default MyProfile;
