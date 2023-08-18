const router = require('express').Router();
const { login, signup } = require('../controllers/auth');

// login
router.post('/login', login);
// signup
router.post('/signup', signup);

module.exports = router;
