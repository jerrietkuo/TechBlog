const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Set up routes for home and API endpoints
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;