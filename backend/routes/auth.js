const express = require('express');
const router = express.Router();
const { register, login } = require('../services/authService');
const { validateRegistration, validateLogin } = require('../middleware/validation');

// @route   POST api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', validateRegistration, register);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', validateLogin, login);

module.exports = router;
