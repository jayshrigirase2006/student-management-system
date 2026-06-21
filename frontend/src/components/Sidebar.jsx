import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white">

      <div className="text-center py-6 text-2xl font-bold border-b border-slate-700">
        SMS
      </div>

      <ul className="p-4 space-y-4">

        <li>
          <Link
            to="/dashboard"
            className="hover:text-blue-400"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/students"
            className="hover:text-blue-400"
          >
            Students
          </Link>
        </li>

        <li>
          <Link
            to="/courses"
            className="hover:text-blue-400"
          >
            Courses
          </Link>
        </li>

        <li>
          <Link
            to="/marks"
            className="hover:text-blue-400"
          >
            Marks
          </Link>
        </li>

        <li>
          <Link
            to="/attendance"
            className="hover:text-blue-400"
          >
            Attendance
          </Link>
        </li>

        <li>
          <Link
            to="/reports"
            className="hover:text-blue-400"
          >
            Reports
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            className="hover:text-blue-400"
          >
            Settings
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;