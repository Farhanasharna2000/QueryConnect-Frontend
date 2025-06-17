
const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/100?img=32",
    points: 1530,
    badge: "Gold",
  },
  {
    id: 2,
    name: "Mohammad Ali",
    avatar: "https://i.pravatar.cc/100?img=12",
    points: 1340,
    badge: "Silver",
  },
  {
    id: 3,
    name: "Lina Karim",
    avatar: "https://i.pravatar.cc/100?img=24",
    points: 1210,
    badge: "Bronze",
  },
  {
    id: 4,
    name: "Fatima Rahman",
    avatar: "https://i.pravatar.cc/100?img=15",
    points: 1095,
    badge: null,
  },
  {
    id: 5,
    name: "John Smith",
    avatar: "https://i.pravatar.cc/100?img=5",
    points: 980,
    badge: null,
  },
];

const badgeColors = {
  Gold: "bg-yellow-400 text-yellow-900",
  Silver: "bg-gray-300 text-gray-900",
  Bronze: "bg-orange-400 text-orange-900",
};

const TopUsers = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Top <span className="text-blue-600">Users</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500"
              />
              <h3 className="text-lg font-semibold mb-1">{user.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{user.points} points</p>

              {user.badge && (
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${badgeColors[user.badge]}`}
                >
                  {user.badge} Badge
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopUsers;
