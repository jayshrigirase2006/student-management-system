const db = require("../config/db");

// Get All Students
exports.getStudents = (req, res) => {
  db.query(
    "SELECT * FROM students",
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server Error",
          error: err.message,
        });
      }

      res.json(results);
    }
  );
};

// Get Single Student
exports.getStudentById = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM students WHERE id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server Error",
          error: err.message,
        });
      }

      res.json(results[0]);
    }
  );
};

// Add Student
exports.addStudent = (req, res) => {
  const { name, email, course, age } = req.body;

  db.query(
    "INSERT INTO students (name, email, course, age) VALUES (?, ?, ?, ?)",
    [name, email, course, age],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server Error",
          error: err.message,
        });
      }

      res.json({
        message: "Student Added Successfully",
      });
    }
  );
};

// Update Student
exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, course, age } = req.body;

  db.query(
    "UPDATE students SET name=?, email=?, course=?, age=? WHERE id=?",
    [name, email, course, age, id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server Error",
          error: err.message,
        });
      }

      res.json({
        message: "Student Updated Successfully",
      });
    }
  );
};

// Delete Student
exports.deleteStudent = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM students WHERE id=?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server Error",
          error: err.message,
        });
      }

      res.json({
        message: "Student Deleted Successfully",
      });
    }
  );
};