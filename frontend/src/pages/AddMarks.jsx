import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMarks() {
  const [student_name, setStudentName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/marks",
        {
          student_name,
          subject,
          marks,
        }
      );

      alert("Marks Added Successfully");
      navigate("/marks");
    } catch (error) {
      console.log(error);
      alert("Failed to Add Marks");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Marks</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={student_name}
          onChange={(e) =>
            setStudentName(e.target.value)
          }
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) =>
            setMarks(e.target.value)
          }
          required
        />

        <br /><br />

        <button type="submit">
          Save Marks
        </button>
      </form>
    </div>
  );
}

export default AddMarks;