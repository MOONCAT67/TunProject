require('dotenv').config(); 

const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to DB:', err.message);
  } else {
    console.log('Connected to MySQL database ✅');
  }
});

module.exports = connection;
