const express = require('express');
const userRoutes = require('./api/users')
const authRoutes = require('./web/auth')
const webRoutes = require('./web/web')

const router = express.Router();

router.use(userRoutes);
router.use(authRoutes);
router.use(webRoutes);

module.exports = router;