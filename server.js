const express = require('express');
const connectDB = require('./config/db.js');

const app = express();

// Connect DataBase
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Welcome to Squad');
});

// Define Routes

app.use('/api/coaches', require('./routes/coaches.js'));
app.use('/api/players', require('./routes/players.js'));
app.use('/api/auth', require('./routes/auth.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
