const express = require('express');
const router = express.Router();

// @Route    POST /api/players
// @Desc     Add a Player
// @access   Private

router.post('/', (req, res) => {
  res.send('Add a Player');
});

// @Route    GET /api/players
// @Desc     Get a added Player
// @access   Private

router.get('/', (req, res) => {
  res.send('Get a added Player');
});

// @Route    PUT /api/players/:id
// @Desc    Update a Player
// @access   Private

router.put('/:id', (req, res) => {
  res.send('Update a Player');
});

// @Route    DELETE /api/players/:id
// @Desc     Delete a Player
// @access   Private

router.delete('/:id', (req, res) => {
  res.send('Delete a added Player');
});

module.exports = router;
