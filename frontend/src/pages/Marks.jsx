import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../layouts/DashboardLayout";
import { Link } from "react-router-dom";

function Marks() {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetchMarks();
  }, []);

  const fetchMarks = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/marks"
    );

    console.log("Marks Data:", res.data);

    setMarks(res.data);
  } catch (error) {
    console.log(error);
  }
};

  const deleteMarks = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this marks record?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/marks/${id}`
      );

      alert("Marks Deleted Successfully");
      fetchMarks();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <DashboardLayout>
      <div style={{ padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <h1>Marks Management</h1>

          <Link to="/add-marks">
            <button
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              + Add Marks
            </button>
          </Link>
        </div>

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
              <th>Student Name</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {marks.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.student_name}</td>
                <td>{item.subject}</td>
                <td>{item.marks}</td>

                <td>
                  <button
                    onClick={() => deleteMarks(item.id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default Marks;