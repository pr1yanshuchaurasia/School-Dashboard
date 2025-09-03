// const mysql = require("mysql2");
// require("dotenv").config(); // Load .env

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("✅ MySQL Connected...");
// });

// module.exports = db;
const fs = require("fs");
const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    ca: fs.readFileSync(process.env.MYSQL_CA_CERT_PATH, "utf8"),
    rejectUnauthorized: true,
  },
});

module.exports = pool;
