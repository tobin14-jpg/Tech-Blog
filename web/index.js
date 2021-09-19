const express = require('express');
const userRoutes = require('./api/users')
const authRoutes = require('./web/auth')

const router = express.Router();

router.use(userRoutes);
router.use(authRoutes);

module.exports = router;