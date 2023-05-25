// this package returns a function using which we can initiate a new express application object
const express = require('express');
const connect = require('./config/database');
const { PORT } = require('./config/serverConfig');

const bodyParser = require('body-parser');
const passport = require('passport');

const apiRoutes = require('./routes/index');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/user');
require('./utils/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", authRoutes);
app.use("/api", passport.authenticate('jwt', { session: false }), apiRoutes);

app.listen(PORT, async () => {
    // this callback will be executed everytime the server starts
    console.log(`Server started on port ${PORT}`);
    await connect();
    console.log(`mongo db connected`);
})