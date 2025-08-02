const { body } = require('express-validator');

const validateRegistration = [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please include a valid email').isEmail(),
  body('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
];

const validateLogin = [
  body('email', 'Please include a valid email').isEmail(),
  body('password', 'Password is required').exists(),
];

module.exports = {
  validateRegistration,
  validateLogin,
};
