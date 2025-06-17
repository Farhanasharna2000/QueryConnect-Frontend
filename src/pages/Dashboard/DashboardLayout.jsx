import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white p-6 space-y-4">
       <Link to="/" className="text-xl">AskZone</Link>
        <nav className="space-y-3 mt-10">
          <NavLink to="profile" className="block hover:text-gray-200">My Profile</NavLink>
          <NavLink to="add-question" className="block hover:text-gray-200">Ask a Question</NavLink>
          <NavLink to="my-questions" className="block hover:text-gray-200">My Questions</NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
