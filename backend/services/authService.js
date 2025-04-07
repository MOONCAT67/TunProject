const { loginValidation, registerValidation } = require("../middleware/validation");
const db = require("../database/db");
const jwt = require("jsonwebtoken");
const md5 = require("md5");

exports.loginUser = async (params) => {
  const { error } = loginValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const { email, password } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      "SELECT id, fullname, email, role FROM users WHERE email = ? AND password = ?",
      [email, hashedPassword],
      (err, result) => {
        if (err) {
          reject({
            data: err,
            message: "Something went wrong, please try again",
            statusCode: 500,
          });
        }

        if (result.length === 0) {
          reject({
            message: "Wrong credentials, please try again",
            statusCode: 401,
          });
        }

        if (result.length > 0) {
          const user = result[0];
          const token = jwt.sign(
            { 
              id: user.id,
              email: user.email,
              role: user.role 
            }, 
            "secret",
            { expiresIn: '1h' }
          );
          resolve({
            message: "Logged in successfully",
            user: {
              id: user.id,
              fullname: user.fullname,
              email: user.email,
              role: user.role
            },
            token,
            statusCode: 200
          });
        }
      }
    );
  });
};

exports.registerUser = async (params) => {
  const { error } = registerValidation(params);
  if (error) throw { message: error.details[0].message, statusCode: 400 };

  const { fullname, email, password, phone_number, role, profile, skills, location } = params;
  const hashedPassword = md5(password.toString());

  return new Promise((resolve, reject) => {
    db.query(
      `SELECT email FROM users WHERE email = ?`,
      [email],
      (err, result) => {
        if (err) {
          reject({
            message: "Database error",
            statusCode: 500,
            data: err
          });
        }

        if (result.length > 0) {
          reject({
            message: "Email address is in use, please try a different one",
            statusCode: 400,
          });
        } else {
          db.query(
            `INSERT INTO users (fullname, email, password, phone_number, role, profile, skills, location) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [fullname, email, hashedPassword, phone_number || null, role || 'client', profile || null, skills || null, location || null],
            (err, result) => {
              if (err) {
                reject({
                  message: "Registration failed",
                  statusCode: 500,
                  data: err,
                });
              } else {
                const newUser = {
                  id: result.insertId,
                  fullname,
                  email,
                  role: role || 'client'
                };
                
                const token = jwt.sign(
                  { 
                    id: newUser.id,
                    email: newUser.email,
                    role: newUser.role 
                  }, 
                  "secret",
                  { expiresIn: '1h' }
                );
                
                resolve({
                  message: "You have successfully registered.",
                  user: newUser,
                  token,
                  statusCode: 201
                });
              }
            }
          );
        }
      }
    );
  });
};

exports.getUserRoleByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT role FROM users WHERE email = ?",
      [email],
      (err, result) => {
        if (err) {
          reject({
            message: "Database error",
            statusCode: 500
          });
        }

        if (result.length === 0) {
          reject({
            message: "User not found",
            statusCode: 404,
          });
        }

        if (result.length > 0) {
          resolve({
            message: "User role retrieved successfully",
            role: result[0].role,
            statusCode: 200,
          });
        }
      }
    );
  });
};