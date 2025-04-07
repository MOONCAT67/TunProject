const { loginUser, registerUser, getUserRoleByEmail } = require("../services/authService");

exports.login_user = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await loginUser({ email, password });
    res.status(result.statusCode).json({
      message: result.message,
      user: result.user,
      token: result.token
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      message: err.message,
      data: err.data
    });
  }
};

exports.register_user = async (req, res, next) => {
  try {
    const result = await registerUser(req.body);
    res.status(result.statusCode).json({
      message: result.message,
      user: result.user,
      token: result.token
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({
      message: err.message,
      data: err.data
    });
  }
};

exports.getUserRole = async (req, res) => {
  const { email } = req.body; 

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    const result = await getUserRoleByEmail(email);
    res.status(result.statusCode).json({ 
      message: result.message, 
      role: result.role 
    });
  } catch (err) {
    res.status(err.statusCode || 500).json({ 
      message: err.message 
    });
  }
};