const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM admin WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      if (result.length === 0) {
        return res.status(401).json({
          message: "Invalid Login",
        });
      }

      res.json(result[0]);
    }
  );
});
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM admin LIMIT 1",
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json(result[0]);
    }
  );
});
router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const sql =
    "INSERT INTO admin(name,email,password) VALUES(?,?,?)";

  db.query(
    sql,
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }

      res.json({
        message: "Registration Successful",
      });
    }
  );
});


module.exports = router;
