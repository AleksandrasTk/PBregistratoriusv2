const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Coach = require("../models/Coach");
const Player = require("../models/Player");

// @Route    GET /api/players
// @Desc     Get a added Player
// @access   Private

router.get("/", auth, async (req, res) => {
  try {
    const players = await Player.find({ coach: req.coach.id });
    res.json(players);
  } catch (err) {
    console.error(error.message);
    res.status(500).json({ msg: "server error" });
  }
});

// @Route    POST /api/players
// @Desc     Add a Player
// @access   Private

router.post(
  "/",
  [
    auth,
    [
      check("name", "Please enter a valid name").not().isEmpty(),
      check("playerNumber", "Please enter a valid Player Number")
        .not()
        .isEmpty(),
      check("status", "Status must be Playing, Rest or Substitute").isIn([
        "Playing",
        "Rest",
        "Substitute",
      ]),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { name, playerNumber, role, status } = req.body;

    try {
      const newPlayer = new Player({
        name,
        playerNumber,
        role,
        status,
        coach: req.coach.id,
      });

      const player = await newPlayer.save();
      res.json(player);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: "server error" });
    }
  }
);

// @Route    PUT /api/players/:id
// @Desc     Update a Player
// @access   Private

router.put("/:id", (req, res) => {
  res.send("Update a Player");
});

// @Route    DELETE /api/players/:id
// @Desc     Delete a Player
// @access   Private

router.delete("/:id", (req, res) => {
  res.send("Delete a added Player");
});

module.exports = router;
