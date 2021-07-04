const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Coach = require('../models/Coach');

// @Route    POST /api/auth
// @Desc     Auth a Coach and get Token
// @access   Public

router.post(
  '/',
  [
    check('teamName', 'Please add a team name').not().isEmpty(),
    check('password', 'Please add a valid password').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { teamName, password } = req.body;

    try {
      let coach = await Coach.findOne({ teamName });
      if (!coach) {
        res.status(400).json({ msg: 'Access Denied', reason: 'Invalid Team' });
      }
      let isMatch = await bcrypt.compare(password, coach.password);
      if (!isMatch) {
        res
          .status(400)
          .json({ msg: 'Access Denied', reason: 'Invalid Password' });
      }
      const payload = {
        coach: {
          id: coach.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtsecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'server error' });
    }
  }
);

// @Route    GET /api/auth
// @Desc     Get a logged in Coach using Token
// @access   Private

router.get('/', auth, async (req, res) => {
  try {
    const coach = await Coach.findById(req.coach.id).select('-password');
    res.json(coach);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: `server error` });
  }
});

module.exports = router;
