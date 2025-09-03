// const db = require("../config/db");
// const path = require("path");

// exports.addSchool = (req, res) => {
//   const { name, address, city, state, contact, email_id } = req.body;
//   const image = req.file ? req.file.filename : null;

//   if (!name || !address || !city || !state || !contact || !email_id) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const sql = "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
//   db.query(sql, [name, address, city, state, contact, email_id, image], (err, result) => {
//     if (err) throw err;
//     res.json({ message: "School added successfully!" });
//   });
// };

// exports.getSchools = (req, res) => {
//   db.query("SELECT id, name, address, city, image FROM schools", (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// };


const db = require("../config/db");
const path = require("path");

exports.addSchool = async (req, res) => {
  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!name || !address || !city || !state || !contact || !email_id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const sql =
      "INSERT INTO schools (name, address, city, state, contact, email_id, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const [result] = await db.query(sql, [
      name,
      address,
      city,
      state,
      contact,
      email_id,
      image,
    ]);

    res.json({ message: "School added successfully!", id: result.insertId });
  } catch (err) {
    console.error("Error inserting school:", err);
    res.status(500).json({ error: "Database error" });
  }
};

exports.getSchools = async (req, res) => {
  try {
    const [results] = await db.query(
      "SELECT id, name, address, city, image FROM schools"
    );
    res.json(results);
  } catch (err) {
    console.error("Error fetching schools:", err);
    res.status(500).json({ error: "Database error" });
  }
};
