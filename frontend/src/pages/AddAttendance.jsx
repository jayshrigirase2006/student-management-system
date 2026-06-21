import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

function AddAttendance() {
  const [student_name, setStudentName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/attendance",
        {
          student_name,
          date,
          status,
        }
      );

      alert("Attendance Added Successfully");
      navigate("/attendance");
    } catch (error) {
      console.log(error);
      alert("Failed to Add Attendance");
    }
  };

  return (
    <DashboardLayout>
      <div style={{ padding: "20px" }}>
        <h1>Add Attendance</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Student Name</label>
            <input
  type="text"
  value={student_name}
  onChange={(e) => setStudentName(e.target.value)}
  placeholder="Enter Student Name"
  required
  style={{
    width: "250px",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  }}
/>
            <br />
            <input
              type="text"
              value={student_name}
              onChange={(e) =>
                setStudentName(e.target.value)
              }
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Date</label>
            <br />
            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Status</label>
            <br />
            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option value="Present">
                Present
              </option>
              <option value="Absent">
                Absent
              </option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Save Attendance
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}



export default AddAttendance;