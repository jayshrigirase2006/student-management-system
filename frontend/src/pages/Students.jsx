import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/students"
    );

    console.log(res.data);

    setStudents(res.data);
  } catch (error) {
    console.log(error);
  }
};
  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/students/${id}`
      );

      alert("Student Deleted Successfully");

      fetchStudents();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };
 const filteredStudents = students.filter(
  (student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase()) ||
    student.course.toLowerCase().includes(search.toLowerCase())
);
  return (
    
    <div style={{ padding: "20px" }}>
      <h1>Students List</h1>

      <h3>Total Students: {students.length}</h3>
       
      <h3>Total Courses: {
  [...new Set(students.map(s => s.course))].length
}</h3>
      

      <Link to="/add-student">
        <button
          style={{
            padding: "10px",
            marginBottom: "15px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Student
        </button>
      </Link>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search Student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          border: "1px solid black",
        }}
      />

      <div style={{ overflowX: "auto" }}>
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
        <th>SR No.</th>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Age</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {filteredStudents.length === 0 ? (
        <tr>
          <td colSpan="7" style={{ textAlign: "center" }}>
            No Student Found
          </td>
        </tr>
      ) : (
        filteredStudents.map((student, index) => (
          <tr key={student.id}>
            <td>{index + 1}</td>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.course}</td>
            <td>{student.age}</td>

            <td>
              <Link to={`/edit/${student.id}`}>
  <button
    style={{
      backgroundColor: "green",
      color: "white",
      border: "none",
      padding: "8px 12px",
    }}
  >
    Edit
  </button>
</Link>

              <button
                onClick={() =>
                  deleteStudent(student.id)
                }
                style={{
                  marginLeft: "10px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
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
    </div>
  );
}

export default Students;