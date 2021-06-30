const express = require("express");
const router = express.Router();
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
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    res.send("Passed");
  }
);

module.exports = router;
