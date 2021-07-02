const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const Coach = require("../models/Coach");

// @Route    POST /api/coaches
// @Desc     Register a Coach
// @access   Public

router.post(
  "/",
  [
    check("name", "Please enter a valid name").not().isEmpty(),
    check("phone", "PLease enter a valid phone number").isMobilePhone(),
    check("teamName", "Please add a team name").not().isEmpty(),
    check("sport", "Please add a sport").not().isEmpty(),
    check("password", "Please add a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { name, phone, password, teamName, sport } = req.body;

    try {
      let team = await Coach.findOne({ teamName });
      if (team) {
        return res.status(400).json({
          msg: "Team already exists, Please choose another team name",
        });
      }
      coach = new Coach({
        name,
        phone,
        teamName,
        sport,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      coach.password = await bcrypt.hash(password, salt);

      await coach.save();

      const payload = {
        coach: {
          id: coach.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtsecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "server error" });
    }
  }
);

module.exports = router;
