const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get All Attendance
router.get("/", (req, res) => {
  db.query("SELECT * FROM attendance", (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(results);
  });
});

// Add Attendance
router.post("/", (req, res) => {
  const { student_name, date, status } = req.body;

  db.query(
    "INSERT INTO attendance (student_name, date, status) VALUES (?, ?, ?)",
    [student_name, date, status],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Attendance Added Successfully",
      });
    }
  );
});

// Delete Attendance
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM attendance WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Attendance Deleted Successfully",
      });
    }
  );
});

module.exports = router;