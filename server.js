const express = require("express");
const connectDB = require("./config/db.js");

const app = express();

// Connect DataBase
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Squad");
});

// Define Routes

app.use("/api/coaches", require("./Routes/coaches.js"));
app.use("/api/players", require("./Routes/players.js"));
app.use("/api/auth", require("./Routes/auth.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
