var router = require('express').Router();

// split up route handling
router.use('/products', require('./products'));
//router.use('/categories', require('./categories'));

module.exports = router;