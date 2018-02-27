const express = require('express');
const router = express.Router();


require('./authRoutes')(router);
require('./eventRoutes')(router);

module.exports = router;
