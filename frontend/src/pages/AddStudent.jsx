import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !student.name ||
    !student.email ||
    !student.course ||
    !student.age
  ) {
    alert("All fields are required");
    return;
  }
 const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(student.email)) {
  alert("Enter a valid email address");
  return;
}
  try {
      await axios.post(
        "http://localhost:5000/api/students",
        student
      );

      alert("Student Added Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Add Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
          style={{
            border: "1px solid black",
            padding: "8px",
          }}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          style={{
            border: "1px solid black",
            padding: "8px",
          }}
        />

        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
          style={{
            border: "1px solid black",
            padding: "8px",
          }}
        />

        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
          style={{
            border: "1px solid black",
            padding: "8px",
          }}
        />

        <br /><br />

        <button type="submit">
          Save Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;