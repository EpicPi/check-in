const express = require('express');
const router = express.Router();

// YOUR API ROUTES HERE

// SAMPLE ROUTE
// router.use('/user', (req, res) => {
//     res.json({ success: true });
// });

require('./authRoutes')(router);

module.exports = router;
