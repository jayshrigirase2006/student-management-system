const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const markRoutes = require("./routes/markRoutes");

const app = express();
const adminRoutes = require("./routes/adminRoutes");
const subjectRoutes = require("./routes/subjectRoutes");

app.use("/api/subjects", subjectRoutes);
app.use(cors());
app.use(express.json());
app.use("/api/admin", adminRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/marks", markRoutes);
app.use("/api/attendance", attendanceRoutes);

app.get("/", (req, res) => {
  res.send("SMS Backend Running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});