const express = require('express');
const router = express.Router();


require('./authRoutes')(router);
require('./hostEventRoutes')(router);
require('./guestEventRoutes')(router);

module.exports = router;
