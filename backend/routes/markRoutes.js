const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get All Marks
router.get("/", (req, res) => {
  db.query("SELECT * FROM marks", (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server Error",
      });
    }

    res.json(results);
  });
});

// Add Marks
router.post("/", (req, res) => {
  const { student_name, subject, marks } = req.body;

  db.query(
    "INSERT INTO marks (student_name, subject, marks) VALUES (?, ?, ?)",
    [student_name, subject, marks],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json({
        message: "Marks Added Successfully",
      });
    }
  );
});

// Delete Marks
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM marks WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server Error",
        });
      }

      res.json({
        message: "Marks Deleted Successfully",
      });
    }
  );
});
module.exports = router;