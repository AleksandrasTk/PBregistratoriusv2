const express = require('express');
const router = express.Router();

// @Route    POST /api/auth
// @Desc     Auth a Coach and get Token
// @access   Public

router.post('/', (req, res) => {
  res.send('Login a Coach');
});

// @Route    GET /api/auth
// @Desc     Get a logged in Coach using Token
// @access   Private

router.get('/', (req, res) => {
  res.send('Logged in Coach');
});

module.exports = router;
