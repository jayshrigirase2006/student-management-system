import DashboardLayout from "../layouts/DashboardLayout";

function Courses() {
  const courses = [
    "BCA",
    "AI & ML",
    "MSC",
    "OS",
    "BSC IT",
  ];

  return (
    <DashboardLayout>
      <div style={{ padding: "20px" }}>
        <h1>Courses Management</h1>

        <table
          style={{
            width: "100%",
            background: "white",
            borderCollapse: "collapse",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr style={{ background: "#1976d2", color: "white" }}>
              <th>ID</th>
              <th>Course Name</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default Courses;