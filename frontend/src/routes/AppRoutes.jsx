import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
const admin = JSON.parse(
  localStorage.getItem("admin")
);
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import Attendance from "../pages/Attendance";
import AddAttendance from "../pages/AddAttendance";
import Marks from "../pages/Marks";
import AddMarks from "../pages/AddMarks";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import AddStudent from "../pages/AddStudent";
import Register from "../pages/Register";
import EditStudent from "../pages/EditStudent";
import Courses from "../pages/Courses";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/courses" element={<Courses />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/add-attendance" element={<AddAttendance />} />
      <Route path="/marks" element={<Marks />} />
      <Route path="/add-marks" element={<AddMarks />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/register" element={<Register />} />
      <Route path="/edit/:id" element={<EditStudent />} />
      <Route
  path="/dashboard"
  element={
    admin ? (
      <Dashboard />
    ) : (
      <Navigate to="/" />
    )
  }
/>
      <Route path="/settings" element={<Settings />} />
      <Route
  path="/add-student"
  element={<AddStudent />
    
  }
/>
    </Routes>
  );
}

export default AppRoutes;