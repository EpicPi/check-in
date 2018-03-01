const express = require('express');
const router = express.Router();


require('./authRoutes')(router);
require('./hostEventRoutes')(router);

module.exports = router;
