const Joi = require('joi');

// Login validation
exports.loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
};

// Register validation - updated to match your users table
exports.registerValidation = (data) => {
  const schema = Joi.object({
    fullname: Joi.string().min(2).required(),
    email: Joi.string().min(2).required().email(),
    password: Joi.string().min(6).required(),
    phone_number: Joi.string().pattern(/^[0-9]{8,15}$/),
    role: Joi.string().valid('client', 'worker', 'admin').default('client'),
    profile: Joi.string(),
    skills: Joi.string(),
    location: Joi.string()
  });
  return schema.validate(data);
};