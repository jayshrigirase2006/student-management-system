import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
  });

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/students/${id}`
      );

      setStudent(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/students/${id}`,
        student
      );

      alert("Student Updated Successfully");

      navigate("/students");
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Student</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          style={{
            border: "1px solid black",
            padding: "8px",
          }}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          style={{
            border: "1px solid black",
            padding: "8px",
          }}
        />

        <br /><br />

        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Course"
          style={{
            border: "1px solid black",
            padding: "8px",
          }}
        />

        <br /><br />

        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Age"
          style={{
            border: "1px solid black",
            padding: "8px",
          }}
        />

        <br /><br />

        <button type="submit">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default EditStudent;