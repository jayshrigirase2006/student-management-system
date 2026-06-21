import { useState } from "react";
import axios from "axios";

function AddSubject() {
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/subjects",
      {
        subject_name: subject,
      }
    );

    alert("Subject Added");
    setSubject("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Subject</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject Name"
          value={subject}
          onChange={(e) =>
            setSubject(e.target.value)
          }
        />

        <br />
        <br />

        <button type="submit">
          Add Subject
        </button>
      </form>
    </div>
  );
}

export default AddSubject;