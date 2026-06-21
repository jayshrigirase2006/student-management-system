const db = require("../config/db");

exports.getAttendance = (req, res) => {
  db.query(
    `SELECT attendance.*, students.name
     FROM attendance
     JOIN students
     ON attendance.student_id = students.id`,
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
};

exports.addAttendance = (req, res) => {
  const { student_id, attendance_date, status } =
    req.body;

  db.query(
    "INSERT INTO attendance(student_id, attendance_date, status) VALUES(?,?,?)",
    [student_id, attendance_date, status],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({
        message: "Attendance Added Successfully",
      });
    }
  );
};