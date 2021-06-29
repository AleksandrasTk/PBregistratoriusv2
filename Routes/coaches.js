const express = require('express');
const router = express.Router();

// @Route    POST /api/coaches
// @Desc     Register a Coach
// @access   Public

router.post('/', (req, res) => {
  res.send('Register a Coach');
});

module.exports = router;
