const express = require('express');
const router = express.Router();


require('./authRoutes')(router);

module.exports = router;
