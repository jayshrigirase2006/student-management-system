const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all subjects
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM subjects",
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result);
    }
  );
});

// Add new subject
router.post("/", (req, res) => {
  const { subject_name } = req.body;

  db.query(
    "INSERT INTO subjects(subject_name) VALUES(?)",
    [subject_name],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Subject Added Successfully",
      });
    }
  );
});
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM students WHERE id=?",
    [id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result[0]);
    }
  );
});


module.exports = router;