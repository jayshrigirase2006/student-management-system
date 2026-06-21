import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

function Attendance() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/attendance"
      );

      setAttendance(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAttendance = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete attendance?"
  );

  if (!confirmDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/attendance/${id}`
    );

    alert("Attendance Deleted");

    fetchAttendance();
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
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1>Attendance Management</h1>

          <Link to="/add-attendance">
            <button
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              + Mark Attendance
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
              <th style={{ padding: "12px" }}>ID</th>
              <th style={{ padding: "12px" }}>Student Name</th>
              <th style={{ padding: "12px" }}>Date</th>
              <th style={{ padding: "12px" }}>Status</th>
              <th style={{ padding: "12px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {attendance.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Attendance Found
                </td>
              </tr>
            ) : (
              attendance.map((item) => (
                <tr key={item.id}>
                  <td style={{ padding: "12px" }}>
                    {item.id}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {item.student_name}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {new Date(
                      item.date
                    ).toLocaleDateString()}
                  </td>

                  <td style={{ padding: "12px" }}>
                    <span
                      style={{
                        backgroundColor:
                          item.status === "Present"
                            ? "green"
                            : "red",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                      }}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td style={{ padding: "12px" }}>
                    <button
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        border: "none",
                        padding: "8px 12px",
                        marginRight: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      Edit
                    </button>

                   <button
  onClick={() => deleteAttendance(item.id)}
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default Attendance;