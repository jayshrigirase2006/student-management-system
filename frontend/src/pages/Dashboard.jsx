import { FaUserGraduate, FaBook, FaChartBar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import DashboardLayout from "../layouts/DashboardLayout";

function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/students"
      );
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalStudents = students.length;

  const totalCourses = [
    ...new Set(students.map((s) => s.course))
  ].length;

  const averageAge =
    students.length > 0
      ? (
          students.reduce(
            (sum, student) =>
              sum + Number(student.age),
            0
          ) / students.length
        ).toFixed(1)
      : 0;

  const courseStats = students.reduce(
    (acc, student) => {
      acc[student.course] =
        (acc[student.course] || 0) + 1;
      return acc;
    },
    {}
  );

  const chartData = Object.entries(
    courseStats
  ).map(([course, count]) => ({
    name: course,
    value: count,
  }));

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
  ];

  return (
    <DashboardLayout>
      <div style={{ padding: "20px" }}>
        <h1>Dashboard</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#007bff",
              color: "white",
              padding: "20px",
              width: "250px",
              borderRadius: "10px",
            }}
          >
            <FaUserGraduate size={40} />
            <h2>{totalStudents}</h2>
            <p>Total Students</p>
          </div>

          <div
            style={{
              background: "green",
              color: "white",
              padding: "20px",
              width: "250px",
              borderRadius: "10px",
            }}
          >
            <FaBook size={40} />
            <h2>{totalCourses}</h2>
            <p>Total Courses</p>
          </div>

          <div
            style={{
              background: "orange",
              color: "white",
              padding: "20px",
              width: "250px",
              borderRadius: "10px",
            }}
          >
            <FaChartBar size={40} />
            <h2>{averageAge}</h2>
            <p>Average Age</p>
          </div>
        </div>

        <h2 style={{ marginTop: "40px" }}>
          Recent Students
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "white",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#1976d2",
                color: "white",
              }}
            >
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={{ marginTop: "40px" }}>
          Course Distribution
        </h2>

        <PieChart width={500} height={300}>
          <Pie
            data={chartData}
            dataKey="value"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[index % COLORS.length]
                }
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;