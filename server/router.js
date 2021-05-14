const { Router } = require('express');
const router = Router();
const blogController = require('./controllers/blogController');
const authController = require('./controllers/authController');
const usersController = require('./controllers/usersController')

router.use('/blog', blogController)
router.use('/auth', authController)
router.use('/users', usersController)

module.exports = router